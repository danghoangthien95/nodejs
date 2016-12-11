var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

server.listen(3000, function () {
	// body...
	console.log('server start')
});
app.get('/', function (req, res) {
	// body...
	res.render('home')
});

function Ads(ten, hinh, link) {
	// body...
	this.ten = ten;
	this.hinh = hinh;
	this.link = link;
}
var currentAd;
var arr = [
	new Ads('CocaCola', '1.jpg', 'http://www.coca-cola.vn/vi/home/'),
	new Ads('Pepsi', '2.png', 'http://www.pepsico.com/'),
	new Ads('RedBull', '3.png', 'http://www.redbull.com/en')
]
app.get('/admin', function (req, res) {
	// body...
	res.render('admin', {arr: arr})
});
io.on('connection', function (socket) {
	// body...
	console.log('co nguoi ket noi');
	socket.emit('SERVER_SEND_ADS', arr[currentAd]);
	socket.on('ADMIN_GUI_QUANG_CAO', function (data) {
		// body...
		// console.log(data);
		var i = arr.findIndex(function (e) {
			// body...
			return e.hinh == data;
		})
		currentAd = i;
		socket.broadcast.emit('SERVER_SEND_ADS', arr[i]);
	});
});
