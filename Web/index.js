var express = require('express')
var bodyParser = require('body-parser')
var upload = require('./uploadfile.js')('avatar')
var insertHinh = require('./db.js').insertHinh
var like = require('./db.js').like
var dislike = require('./db.js').dislike


var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('public'))

app.get('/nhaphuong/:id',function (req, res) {
	// body...
	var id = req.params.id;
	insertHinh(id, function(err, result){
		console.log(result)
		if (result.rows[0] == undefined) {
			res.redirect('/nhaphuong/1')
		} else {
			res.render('main', {dangxem: id, hinh: result.rows[0].hinh}) // chi tra ve duy nhat 1 dong nen l rows[0]
		}
	}, 
	function(err, result){
		res.send('them khong thanh cong');
	})
	
}) 

app.get('/like/:id', function(req, res){
	var id = req.params.id;
	like(id, function(result) {
		// body...
		if(result == 1)
			res.send('Update like thanh cong')
		else{
			res.send('Update like that bai')
		}
	})
})

app.get('/dislike/:id', function(req, res){
	var id = req.params.id;
	dislike(id, function(result) {
		// body...
		if(result == 1)
			res.send('Update dislike thanh cong')
		else{
			res.send('Update dislike that bai')
		}
	})
})