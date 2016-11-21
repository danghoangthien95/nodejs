var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var upload = require('./uploadfile.js')('avatar');
var insertUser = require('./db.js').insertUser
var checkSignIn = require('./db.js').checkSignIn


var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

var sess = session({
	secret: 'cdsc45sd4c5sd4c5s',
	resave: false,
	saveUninitialized: false,
	cookie: {maxAge: 10000}
});
app.use(sess);

// middleware giu session
app.use(function (req, res, next) {
	console.log(req.path); // xem duong dan
	// body...
	// chua mua ve thi undefined
	if(req.session.daMuaVe == undefined || req.session.daMuaVe == false) {
		req.session.daMuaVe = false;
	} else {
		req.session.daMuaVe++;
	}

	if(req.path == '/muave' && req.session.daMuaVe > 0) { // da vao route muave && muave roi
		res.redirect('vaorap');
		// return false;
	}else {
		next();
	}
})

app.get('/',function (req, res) {
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
app.get('/giaodich', function (req, res) {
	// body...
	if(req.session.daDangNhap > 0) {
		res.send('Bat dau giao dich')
	} else {
		res.redirect('/dangnhap')
	}
})

app.post('/dangnhap', parser, function (req, res) {
	// body...
	var username = req.body.username;
	var password = req.body.password;
	checkSignIn(username, password, function (kq) {
		if (kq == 1) {
			req.session.daDangNhap = 1;
			res.redirect('/giaodich')
		} else if (kq == 2) {
			res.send('Sai password')
		} else if (kq == 3) {
			res.send('Username khong ton tai')
		}
	})
})

app.get('/datve', function (req, res) {
	// body...
	res.render('homepage');
})
app.get('/muave', function (req, res) {
	// body...
	req.session.daMuaVe = 1; // true, phai lam cho gia tri thay doi
	res.send('Ban da mua ve');
})
app.get('/vaorap', function (req, res) {
	// body...
	if(req.session.daMuaVe) {
		res.send('Welcome');
	} else {
		res.redirect('/datve');
	}
})
