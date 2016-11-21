var pg = require('pg');
var encrypt = require('./crypto.js').encrypt;
var decrypt = require('./crypto.js').decrypt;

var config = {
	user: 'postgres',
	password: 'KHOAPHAM',
	database: 'USER',
	host: 'localhost',
	port: 5432,
	max: 10,
	idleTimeoutMillis:30000
}

var pool = new pg.Pool(config);

function queryDB(sql, cb){
  pool.connect(function(err, client, done){
    if(err){
      console.log('LOI KET NOI ' + err);
    }else{
      client.query(sql, cb);
    }
  });
}
function insertUser(username, password, address, images, funcSuccess, funcFailed) {
	// body...
	var newPassword = encrypt(password);
	var sql = `INSERT INTO "USER"(username, password, address, images) 
				VALUES('${username}', '${newPassword}', '${address}', '${images}')`;
	console.log(sql);
	queryDB(sql, function (err, result) {
		// body...
		if(err) {
			console.log(err)
			funcFailed()
		} else {
			console.log(result)
			funcSuccess()
		}
	})
}

function checkSignIn(username, password, cb) {
	// body...
	var sql = `SELECT * FROM "USER" WHERE username = '${username}'`;
	queryDB(sql, function (err, result) {
		// body...
		if(err) {
			console.log(err)
		} else {
			if (result.rowCount == 1) {
				var passDecrypt = decrypt(result.rows[0].password);
				if (passDecrypt == password) {
					cb(1); // thanh cong
				} else {
					cb(2); // mat khau failed == sai mat khau
				}
			} else {
				cb(3); // username khong ton tai
			}
		}
	})
}

module.exports.insertUser = insertUser; // neu co dau thuc thi co nghia la bang voi kq tra ve cua func
module.exports.checkSignIn = checkSignIn;

pool.on('error', function (err, client) {
	console.log(err)
});