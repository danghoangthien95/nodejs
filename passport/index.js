var express = require('express')
var bodyParser = require('body-parser')
var upload = require('./uploadfile.js')('avatar')
// var insertUser = require('./db.js').insertUser
// var checkSignIn = require('./db.js').checkSignIn


var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('public'))

require('./app/routes.js')(app);