var express = require('express')
var bodyParser = require('body-parser')

var multer = require('multer')
// var upload = multer({dest: 'uploads/'})
var storage = multer.diskStorage({
	// vi tri luu file, cb la callback
	destination: function (req, file, cb) {
		// body...
		cb(null, 'uploads')
	},
	// dat ten file la gi
	filename: function (req, file, cb) {
		// body...
		cb(null, file.originalname + Date.now())
	}
});
var limit = {fileSize: 10*1024}

var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

function fileFilter (req, file, cb) {
	if(file.mimetype == "image/png") {	
		cb(null, true)
	} else {
		cb(new Error('I don\'t have a clue!'))
	}
}

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('public'))

app.get('/', function (req, res) {
	// body...
	res.render('home');
});

app.post('/profile', function (req, res) {
	// req.file is the `avatar` file
	// req.body will hold the text fields, if there were any
	upload(req, res, function (err) {
		// body...
		if(err) {
			res.send('Error' + err)
		} else {
			res.send('Successful')
		}
	})
})

// var uploads = multer().array('avatar', 100)
// app.post('/upload', function (req, res) {
// 	// body...
// 	uploads(req, res, function (err) {
// 		// body...
// 		if(err) {
// 			res.send('Error' + err)
// 		} else {
// 			res.send('Successful')
// 		}
// 	})
// })

var upload = multer({ storage: storage, limits: limit, fileFilter: fileFilter}).array('avatar', 15)