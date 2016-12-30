var app = require('express')(),
	request = require('request'),
	cheerio = require('cheerio');

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, function () {
	// body...
	console.log('Server Start');
});

app.get('/', function (req, res) {
	// body...
	request('http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=30251', function (error, response, body) {
	  if (error) {
	    console.log('Error ' + error);
	  } else {
	  	// console.log(body);
	  	$ = cheerio.load(body);
	  	var name = $(body).find('span#ctl00_ContentPlaceHolder1_lblName');
	  	res.render('app.ejs', {name: name});
	  }
	})
});


