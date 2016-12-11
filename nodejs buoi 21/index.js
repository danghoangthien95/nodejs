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
})
app.get('/', function (areq, res) {
	// body...
	res.render('home')
})

// tao mang chua cac room, khi tao room se add vao room
// neu duoc tao roi, join vao room ma nguoi do muon tao, ko thi ko cho tao room do.

//dau tien khai bao mang chua room
var mangRoom = [];
var mangEdit = [];
io.on('connection', function (socket) {
	// body...
	console.log('co nguoi ket noi ' + socket.id);
	// sau khi dang nhap, gui ve list phong dang ton tai de xem server co nhung room nao
	socket.emit('SERVER_SEND_ROOM_ARRAY', mangRoom);
	//lang nghe su kien va lam gi voi data gui len
	socket.on('CLIENT_CREATE_NEW_ROOM', function (data) {
		// body...
		if(mangRoom.indexOf(data) == -1) {
			// 3. ngay khi tao thi se join va room do
			socket.join(data);
			
			// 4. roi room(chi o trong 1 room)
			if(socket.currentRoom != undefined) {;

				// roi room cu
				socket.leave(socket.currentRoom);
			}
			socket.currentRoom = data;

			socket.emit('SERVER_CONFIRM_ROOM_NAME', data);
			// 1. thong bao cho moi nguoi
			socket.broadcast.emit('NEW_ROOM_ACCEPTED', data);
			// mangRoom.push(data) la day len dau, unshift la day xuong duoi cung
			mangRoom.unshift(data)
		} else {
			socket.emit('SERVER_CONFIRM_ROOM_NAME', false);
		}
	});
	socket.on('CLIENT_JOIN_ROOM', function (roomName) {
		// body...
		if(socket.currentRoom != undefined) {;

			// roi room cu
			socket.leave(socket.currentRoom);
		}
		socket.currentRoom = data;
		socket.join(roomName);
	});
	socket.on('CLIENT_SEND_MESSAGE_TO_ROOM', function(data) {
		// body...
		socket.broadcast.to(data.roomName).emit('ROOM_MESSAGE', data.msg);
	});
	socket.on('SOMEONE_EDIT_MSG', function () {
		// body...
		// ko gui cho nguoi nhap, goi cho moi nguoi
		socket.broadcast.emit('USER_EDIT', '');
	});
	socket.on('SOMEONE_STOP_EDIT', function () {
		// body...
		var index = mangEdit.indexOf(socket);
		mangEdit.splice(index, 1);
		if(mangEdit.length == 0) {
			io.emit('STOP_EDIT', '');
		}
	});
})
// dong bo chay truoc, bat dong bo chay sau cung
// log la dong bo, gan la dong bo