var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.listen(3000);

var phepTinhA = require('./PhepTinh.js');
var khoaPham = require('./Object.js')

// ho tro cho post
var parser = bodyParser.urlencoded({extended: false})

// cach 01; tao route, callback function khi truy cap den, sau do chay function nay
app.get('/trangchu', function (req, res) {
	// res.send('Khoa Pham Training: 90 Le Thi Rieng')
	res.end();
});


// cach 02:
app.get('/lienhe', onContact);
function onContact(req, res) {
	res.send('<h1>Khoa Pham Training</h1>')
};

app.get('/chao/:name/:age', function (req, res) {
	// body...
	var name = req.params.name;
	var age = req.params.age;
	console.log(req.params);
	res.send('chao ban ' + name + ' nam nay ' + age + ' tuoi');
})

// 2 route giong nhau thi uu tien route tao ra truoc.
app.get('/:chao', function (req, res) {
	// body...
	res.send('chao ban');
})

app.get('/hello', function (req, res) {
	// body...
	res.send('new route');
})


app.post('/postman', parser, function (req, res) {
	// body...
	var name = req.body.name;
	var age = req.body.age;
	res.send('chao ban ' + name + ' tuoi cua ban la ' + age);
})

app.get('/pheptinh/:pheptinh/:soA/:soB', onTinh);

function onTinh(req, res) {
	// body...
	var pt = req.params.pheptinh;
	var soA = parseInt(req.params.soA); // chuoi
	var soB = parseInt(req.params.soB); // chuoi
	var pheptinh = new phepTinhA(pt, soA, soB)
	res.send(pheptinh.getString());
}

console.log(khoaPham.getInfo());
khoaPham.newMethod()