const Promise=require('bluebird');
const agent=require('superagent');
const jsonfile=require('jsonfile');
const mkdirp=require('mkdirp');

var links=[
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/buffet-bbq_c139/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/set-an_c174/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/lau_c141/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/an-chay_c244/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/cafe-kem_c140/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/mon-ngot_c179/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/yen-sao_c246/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/he-thong-khaisilk_c273/',
	'http://www.hotdeal.vn/ho-chi-minh/an-uong/giai-nhiet-mua-he_c499/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/tam-trang_c315/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/cham-soc-da-mat_c247/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/cham-soc-co-the_c248/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/cham-soc-toc_c249/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/cham-soc-nha-khoa_c250/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/cham-soc-suc-khoe_c251/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/khac_c259/',
	'http://www.hotdeal.vn/ho-chi-minh/spa-lam-dep/da-dep-dang-xinh_c496/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/vui-choi-cho-be_c305/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/khoa-hoc-cho-be_c306/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/dao-tao_c252/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/goi-chup-hinh_c253/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/the-thao_c254/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/karaoke_c255/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/thu-am_c256/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/phim-kich_c257/',
	'http://www.hotdeal.vn/ho-chi-minh/dao-tao-giai-tri/khac_c258/',
	'http://www.hotdeal.vn/ho-chi-minh/gia-dung/',
	'http://www.hotdeal.vn/ho-chi-minh/cong-nghe-dien-tu/',
	'http://www.hotdeal.vn/ho-chi-minh/me-be/',
	'http://www.hotdeal.vn/ho-chi-minh/my-pham/',
	'http://www.hotdeal.vn/ho-chi-minh/sach/',
	'http://www.hotdeal.vn/ho-chi-minh/thuc-pham/',
	'http://www.hotdeal.vn/ho-chi-minh/hanh-trang-du-lich/',
	'http://www.hotdeal.vn/ho-chi-minh/gui-tron-nguoi-yeu-thuong/',
	'http://www.hotdeal.vn/ho-chi-minh/vao-bep-khong-kho/'
];

function fetchPage(url,page){
	return new Promise(
		(resolve,reject)=>{
			if (page>0){
				agent
				.get(url+'?page='+page)
				.end(function(err,res){
					if (err){
						reject(err);
					} else{
						resolve(res.text);
					}
				});
			} else{
				agent
				.get(url)
				.end(function(err,res){
					if (err){
						reject(err);
					} else{
						resolve(res.text);
					}
				});
			}
		});
}

function getUrls(text){
	const cheerio=require('cheerio'),$=cheerio.load(text);
	var list=$('.product__image').children('a').get();
	var urls=list.map(item=>'http://www.hotdeal.vn'+item.attribs.href);
	return urls;
}

function getItem(text){
	const cheerio=require('cheerio'),$=cheerio.load(text);
	var item={};
	item.name=$('.product__title').get(0).children[0].data;
	item.price=$('.product--details')
		.children('.product__details')
		.children('.product__price-info')
		.children('.product__price')
		.children('.price').last()
		.children('input')
		.attr('value');
	item.value=$('.product--details')
		.children('.product__details')
		.children('.product__price-info')
		.children('.product__price')
		.children('.price--list-price')
		.children('input')
		.attr('value');
	item.discount=$('.product--details')
		.children('.product__details')
		.children('.product__price-info')
		.children('.product__price')
		.children('.price')
		.children('.price__discount')
		.get(0).children[0].data.match(/[0-9]+(\.[0-9]+)?/gm)[0];
	item.description=$('.product--details')
		.children('.product__details')
		.children('.product__description')
		.children('p')
		.get(0).children[0].data;
	item.features=$('.product-well-title')
		.next().get(0)
		.children.filter(element=>element.name=='p')
		.map(element=>element.children[0].data.substring(2));
	item.images=$('.product__gallery')
		.children('.gallery__image')
		.find('a').find('img').get().map(img=>img.attribs.src || img.attribs['data-src']);
	item.place=$('.sidebar')
		.children('.box--narrow')
		.children('.box__body')
		.children('ul').children('li').last()
		.children('div').get(0)
		.children[0].data.trim();
	return item;
}

function writeItem(item,dir,index){
	const file=__dirname+'/output/'+dir+'/'+index+'.json';
	mkdirp('output/'+dir,(err)=>{
		if (err){
			console.log(err);
		}
	});
	console.log('Writing in '+dir+' index '+index);
	jsonfile.writeFileSync(file,item,{spaces:4});
}

links=links.map(link=>{
	var obj={};
	obj.url=link;
	const sub='http://www.hotdeal.vn/ho-chi-minh/';
	var dir=link.substring(sub.length,link.length-1);
	if (dir.indexOf('_')>=0){
		dir=dir.substring(0,dir.indexOf('_'));
	}
	if (dir.indexOf('/')<0){
		dir='san-pham/'+dir;
	}
	obj.dir=dir;
	return obj;
});

Promise.each(links,link=>fetchPage(link.url,1).then(
	(result)=>{
		const urls=getUrls(result);
		Promise.map(urls,(url,i)=>fetchPage(url,0).then(
			(result)=>{
				var item=getItem(result);
				item.url=url;
				writeItem(item,link.dir,i+1);
			},
			(error)=>console.log(error),
			{concurrency:3}));
	},
	(error)=>console.log(error))
);
