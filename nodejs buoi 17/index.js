var express = require('express');
var app = express();
var server = require('http').Server(app);// return doi tuong kieu Server nen viet hoa
var io = require('socket.io')(server);

server.listen(3000, function (req, res) {
	// body...
	console.log('SERVER START')
})

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function (req, res) {
	// body...
	res.render('home')
})


io.on('connection', function (socket) {
	// body...
	console.log('co nguoi ket noi ' + socket.id);
	socket.on('client_gui_tin_nhan', function(data){ // on la lang nghe
		console.log(data);
		io.emit('server_gui_tin_nhan', data);// tag, emit la gui, io la de realtime
	})
	// socket.emit('server_gui_tin_nhan', 'thanh cong');// tag, emit la gui
	socket.on('disconnect', function (argument) {
		// body...
		console.log('co nguoi vua thoat')
	})
})