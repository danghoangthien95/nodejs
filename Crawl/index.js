var express = require('express'),
	request = require('request'),
	cheerio = require('cheerio'),
	app = express();
 
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views' , './views');

app.listen(9000, function (req, res) {
	// body...
	console.log('server start');
});
app.get('/', function (req, res) {
	// body...
	res.render('home')
});
// var arr = [];
app.get('/:id', function (req, res) {
	var id = req.params.id;
	var t = req.query.t;
	request("http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=" + id, function (err, response, body) {
		// body...
		if(err) {
			console.log('Error ', err);
		} else {
			$ = cheerio.load(body);
			if (body.indexOf("reg-subtitle") == -1) {
				// console.log('id: ' + id + ' khong ton tai');
				// res.render('chuadangky', {id: id});
				if (t == "previous") {
					res.redirect('/' + (Number(id) - 1) + "?t=" + t);
				} else {
					res.redirect('/' + (Number(id) + 1) + "?t=" + t);
				}
				
			} else {
				var name = $(body).find("span#ctl00_ContentPlaceHolder1_lblName");
				var domain = $(body).find("span#ctl00_ContentPlaceHolder1_lblDomain");
				var representer = $(body).find("span#ctl00_ContentPlaceHolder1_lblRepresenter");
				var companyName = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyName");
				var taxCode = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyTaxCode");
				var address = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyAddress");
				var department = $(body).find("span#ctl00_ContentPlaceHolder1_lblDepartmentName");
				var national = $(body).find("span#ctl00_ContentPlaceHolder1_lblNationalName");
				var phone = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyPhone");
				res.render('trangchu',	{id: id, 
										name: name,
										domain: domain,
										representer: representer,
										companyName: companyName,
										taxCode: taxCode,
										address: address,
										department: department,
										national: national,
										phone: phone});
			}
		}
	})
});


// function Crawler(i) {
// 	// body...
// 	request("http://online.gov.vn/WebsiteDisplay.aspx?DocId=" + i, function (err, response, body) {
// 		// body...
// 		if(err) {
// 			console.log('Error ', err);
// 		} else {
// 			$ = cheerio.load(body);
// 			if (body.indexOf("reg-subtitle") == -1) {
// 				console.log('ko ton tai');
// 				// console.log('index: ' + i);
// 			} else {
// 				let domain = $(body).find("span#ctl00_ContentPlaceHolder1_lblDomain");
// 				var domainText;
// 				domain.each(function(i, e){
// 					domainText = $(this).text();
// 				});
// 				arr.push(domainText);
// 				console.log(arr);
// 			}
// 		}
// 	});
// }

// Crawler(30251);	


// func, callback lien tuc tung request.