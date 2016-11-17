var express = require('express')
var bodyParser = require('body-parser')
var upload = require('./uploadfile.js')('avatar')

var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('public'))

function Video(id, titles, images, desc) {
	// body...
	this.id = id;
	this.titles = titles;
	this.images = images;
	this.desc = desc;
}
var arr = [	new Video(190353296, 'Khoa Pham', '18058390_th.jpg', `Trung tam dao tao tin hoc Khoa Pham`),
			new Video(189291290, 'NodeJS', '16500156_th.jpg', `NodeJS là một mã nguồn mở, được dùng để xây dựng các ứng dụng mạng, đặc biệt các ứng đòi hỏi real time (thời gian thực) & khối lượng request lớn. Chúng ta có thể lập trình NodeJS với ngôn ngữ JavaScript. NodeJS có thể được
				 dùng để xây dựng hoàn chỉnh một trang web, ngoài ra, NodeJS còn có thể tích hợp để xây dựng các ứng dụng real time trên iOS, Android, Game online với Unity, Cocos2dx.`),
			new Video(185118818, 'PHP', '18081777_th.jpg', `PHP hiện đang là một trong các ngôn ngữ thiết kế web mạnh nhất thế giới. Đặc biệt, PHP chỉ cần 3 - 4 tháng là bạn đã có thể làm chủ được công nghệ này. Khoa Phạm giới thiệu Khóa học lập trình PHP & MySQL cơ bản dành cho tất cả mọi đối tượng.`),
			new Video(189691907, 'Android', '18058390_th.jpg', `Android đang là hệ điều hành chiếm lĩnh thị trường thiết bị động hiện nay. Hàng trăm ngàn thiết bị từ ti vi, máy nghe nhạc... cho đến điện thoại di động đều có thể chạy trên nền Android. `)];


app.get('/',function (req, res) {
	// body...
	res.render('index_dark', {arr: arr})
})

app.get('/admin', function (req, res) {
	// body...
	res.render('form')
})

app.post('/upload', parser, function (req, res) {
	// body...
	upload(req, res, function (err) {
		// body...
		var images = req.file.filename;
		var titles = req.body.titles;
		var desc = req.body.desc;
		var id = req.body.id;

		arr.push(new Video(id, titles, images, desc));
		res.redirect('/');
		// if(err) {
		// 	res.send('Error' + err)
		// } else {
		// 	res.send('Successful')
		// }
	});
});




app.get('/danhsach', function (req, res) {
	// body...
	res.render('danhsach', {arr: arr});
});