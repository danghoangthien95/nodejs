var express = require('express');
var app = express();
var pg = require('pg');
app.listen(process.env.PORT || 3000);
var URI = ''

app.get('/', function (req, res) {
	// body...
	pg.connect(URI, function (err, client, done) {
		// body...
		if(err) {
			return res.send('loi ket noi' + err);
		}
		done();
		client.query('SELECT * FROM "NhanVien"', function (err, result) {
			// body...
			if(err) {
				return res.send('Loi truy van ' + err);
			}
		res.send(result.rows)
		})
	})
})
/*
id : serial
ten: text
sdt: text*/