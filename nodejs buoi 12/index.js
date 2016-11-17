var express = require('express')
var bodyParser = require('body-parser')
var upload = require('./uploadfile.js')('avatar')
var insertUser = require('./db.js').insertUser
var checkSignIn = require('./db.js').checkSignIn


var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('public'))

app.get('/dangky',function (req, res) {
	// body...
	res.render('main')
}) 

app.post('/dangky', parser, function (req, res) {
	// body...
	upload(req, res, function(err){
		var username = req.body.username;
		var password = req.body.password;
		var address = req.body.address;
		var images = req.file.filename;
		insertUser(username, password, address, images, function () {
			// body...
			res.send('Successful')
		}, function () {
			// body...
			res.send('Failed')
		})
	})
})

app.get('/dangnhap', function (req, res) {
	// body...
	res.render('checkSignIn')
})

app.post('/dangnhap', parser, function (req, res) {
	// body...
	var username = req.body.username;
	var password = req.body.password;
	checkSignIn(username, password, function () {

		res.send('Dang nhap thanh cong')
	}, function () {
		// body...
		res.send('Dang nhap khong thanh cong')
	})
})