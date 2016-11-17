var express = require('express');
var app = express();
app.listen(3000);

// cach 01; tao route, callback function khi truy cap den, sau do chay function nay
app.get('/trangchu', function (req, res) {
	res.send('Khoa Pham Training: 90 Le Thi Rieng')
});


// cach 02:
app.get('/lienhe', onContact);
function onContact(req, res) {
	res.send('Khoa Pham Training')
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
