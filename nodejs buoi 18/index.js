var express = require('express'),
	app = express(),
	server = require('http').Server(app),
	io = require('socket.io')(server);

server.listen(3000, function () {
	// body...
	console.log('SERVER START');
})

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('home');
})

var arrUsername = [];

io.on('connection', function (socket) {
	// body...
	socket.emit('LIST_USERNAME', arrUsername)
	console.log('Co nguoi ket noi ' + socket.id);
	
	// moi connect toi deu tao ra 1 socket khac nhau, data la cai input text
	socket.on('NEW_USERNAME', function (data) {
		// body...
		// kiem tra trung ten
		if(arrUsername.indexOf(data) == -1) {
			socket.username = data;
			arrUsername.push(data);
			// gui so 1 la thanh cong, con so 0 thi that bai.
			socket.emit('XAC_NHAN_DANG_KY', 1);
			io.emit('NGUOI_DUNG_MOI', data)
			console.log('DANG KY THANH CONG');
		} else {
			socket.emit('XAC_NHAN_DANG_KY', 0)
			console.log('DANG KY THAT BAI');
		}
	})

	socket.on('disconnect', function () {
		// body...
		io.emit('NGUOI_DUNG_DANG_XUAT', socket.username);
		console.log('Co nguoi vua thoat')
	})
	socket.on('NEW_MESSAGE', function (data) {
		// body...
		io.emit('SERVER_SEND_MESSAGE', `${socket.username}: ${data}`)
	})
})
