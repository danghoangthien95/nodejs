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

app.use(express.static('public'))

function Bird(name, bodies, cost) {
	// body...
	this.name = name;
	this.bodies = bodies;
	this.cost = cost;
}

var arr = [new Bird('Red', '1.png', 100000),
	new Bird('Green', '2.png', 200000),
	new Bird('Black', '3.png', 300000)];

app.get('/', function (req, res) {
	// body...
	res.render('home', {arr: arr});
});

app.get('/add', function (req, res) {
	// body...
	res.render('form');
});
app.post('/upload', parser, function (req, res) {
	// body...
	var name = req.body.name;
	var cost = req.body.cost; 
	var bodies = req.body.bodies;
	arr.push(new Bird(name, bodies, cost))
	res.redirect('/')
})

app.get('/change/:index', function (req, res) {
	// body...
	var index = req.params.index;
	res.render('edit', {bird: arr[index], index: index}); // truyen bird muon sua va truyen index cua no
});

app.post('/edit', parser, function (req, res) {
	// body...
	var index = req.body.index;
	var name = req.body.name;
	var cost = req.body.cost;
	var bodies = req.body.bodies;

	// var bird = new Bird(name, bodies, cost);
	// arr[index] = bird;


	// nhung thanh phan trong edit truyen vao
	var bird = arr[index];
	bird.name = name;
	bird.bodies = bodies;
	bird.cost = cost;
	res.redirect('/');
})