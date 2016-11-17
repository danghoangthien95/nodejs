var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var parser = bodyParser.urlencoded({extended: false})

app.listen(3000);

app.get('/', function (req, res) {
	// body...
	var strVar="";
	strVar += "<form method=\"post\" action=\"\/dangky\">";
	strVar += "		<input type=\"text\" name=\"name\" placeholder=\"Name\"><br><br>";
	strVar += "		<input type=\"text\" name=\"age\" placeholder=\"Age\"><br><br>";
	strVar += "		<input type=\"submit\" value=\"Send\">";
	strVar += "<\/form>";
	strVar += "";

	res.send(strVar);
});

app.post('/dangky', parser, function (req, res) {
	// body...
	var name = req.body.name;
	var age = req.body.age;
	res.send('ten cua ban ' + name + ' co tuoi la ' + age);
})

// ejs
app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/ejs', function (req, res) {
	// body...
	res.render('home');
})


