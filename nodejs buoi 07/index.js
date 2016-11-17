var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

// app.get('/', function (req, res) {
// 	// truyen du lieu
// 	res.render('home', {name: 'KhoaPham'});
// });

app.post('/dangky', parser, function (req, res) {
	// body...
	var name = req.body.name;
	var age = req.body.age;
	res.send('Ban la ' + name + ', tuoi cua ban la ' + age);
})


function Person(name, age) {
	// body...
	this.name = name;
	this.age = age;
}
var Person1 = new Person('KhoaPham', 6);
var Person2 = new Person('Khoa', 16);
var Person3 = new Person('Pham', 62);
var arrPerson = [Person1, Person2, Person3]

// app.get('/', function (req, res) {
// 	// truyen du lieu
// 	res.render('home', {Person: arrPerson});
// });

// app.get('/', function (req, res) {
// 	// truyen du lieu
// 	res.render('home', {age: 17});
// });

function abcd(a) {
	// body...
	return a;
}
app.get('/', function (req, res) {
	// truyen du lieu
	res.render('home', {f: abcd});
});

