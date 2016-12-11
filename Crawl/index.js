var express = require('express'),
	request = require('request'),
	cheerio = require('cheerio'),
	app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views' , './views');

app.listen(3000, function (req, res) {
	// body...
	console.log('server start')
});

app.get('/', function (req, res) {
	// body...
	request("http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=29695", function (err, response, body) {
		// body...
		if(err) {
			console.log(err);
			res.render('trangchu', {html: 'co loi xay ra'})
		} else {
			$ = cheerio.load(body);
			var ds = $(body).find("span.reg-label-info");
			/*
			ds.each(function (i, e) {
				// body...
				// console.log($(this).text());
				// e["attribs"]["src"] lay images
				e["attribs"]["href"]
			})*/
			console.log(ds)
			res.render('trangchu', {html: ds})
		}
	})
	
});


