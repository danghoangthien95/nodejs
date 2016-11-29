var express = require('express')
var bodyParser = require('body-parser')
var upload = require('./uploadfile.js')('avatar')
var pg = require('pg');

var app = express();
app.listen(3000, function () {
	// body...
	console.log('SERVER START')
});

var parser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('public'))

app.get('/',function (req, res) {
	// body...
	res.render('main')
})

var config = {
	user: 'postgres',
	password: 'KHOAPHAM',
	database: 'students',
	host: 'localhost',
	port: 5432,
	max: 10,
	idleTimeoutMillis:30000
}

var pool = new pg.Pool(config);

function queryDB(sql, cb) {
	// body...
	pool.connect(function(err, client, done) {
	  if(err) {
	     console.log('LOI KET NOI ' + err);
	  } else {
	  	// client.query('SELECT * FROM "User"', function (err, result) {
	  	client.query(sql, function (err, result) {
	  		cb(result, err);
	  	})
	  }
	});
}

app.get('/sinhvien/list', function (req, res) {
	// body...
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * FROM sinhvien ORDER BY id ASC', function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	    	res.end(); // ngat connect
	    	return console.error('error running query', err);
	    }
	    // console.log(result.rows[0].hoten);
	    //output: 1
	    res.render('sinhvien_list.ejs', {danhsach: result})
	  });
	});
	
})

app.get('/sinhvien/them', function (req, res) {
	// show form...
	res.render('sinhvien_insert.ejs')
})

app.post('/sinhvien/them', parser, function (req, res) {
	// insert db...
	
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	var hoten = req.body.txtHoTen;
	var email = req.body.txtEmail;
	  client.query("INSERT INTO sinhvien(hoten, email) VALUES('"+hoten+"', '"+email+"')", function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();1

	    if(err) {
	    	res.end(); // ngat connect
	    	return console.error('error running query', err);
	    }
	    // console.log(result.rows[0].hoten);
	    //output: 1
	    res.redirect('../sinhvien/list')
	  });
	});
})

app.get('/sinhvien/sua/:id', function (req, res) {
	// body...
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  var id = req.params.id;
	  client.query("SELECT * FROM sinhvien WHERE id='"+id+"'", function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	    	res.end(); // ngat connect
	    	return console.error('error running query', err);
	    }
	    // console.log(result.rows[0].hoten);
	    //output: 1
	    res.render('sinhvien_edit.ejs', {sv: result.rows[0]})
	  });
	});
})

app.post('/sinhvien/sua', parser, function (req, res) {
	// body...
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	var hoten = req.body.txtHoTen;
	var email = req.body.txtEmail;
	var id = req.body.txtId;
	  client.query("UPDATE sinhvien SET hoten='"+hoten+"', email='"+email+"' WHERE id='"+id+"' ", function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();1

	    if(err) {
	    	res.end(); // ngat connect
	    	return console.error('error running query', err);
	    }
	    // console.log(result.rows[0].hoten);
	    //output: 1
	    res.redirect('../sinhvien/list')
	  });
	});
})

app.get('sinhvien/xoa/:id', function (req, res) {
	// body...
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	var id = req.params.id;
	  client.query("DELETE FROM sinhvien WHERE id='"+id+"' ", function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();1

	    if(err) {
	    	res.end(); // ngat connect
	    	return console.error('error running query', err);
	    }
	    // console.log(result.rows[0].hoten);
	    //output: 1
	    res.redirect('../../sinhvien/list')
	  });
	});
})

pool.on('error', function (err, client) {
	console.log(err)
});