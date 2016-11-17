var pg = require('pg');

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
	var sql = `INSERT INTO "USER"(username, password, address, images) 
				VALUES('${username}', '${password}', '${address}', '${images}')`;
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


function checkSignIn(username, password, onSuccess, onFailed) {
	// body...
	var sql = `SELECT * FROM "USER" WHERE username = '${username}' AND password = '${password}'`;
	console.log(sql)
	queryDB(sql, function (err, result) {
		// body...
		if(err) {
			console.log(err)
		} else {
			console.log(result.rowCount)
			if (result.rowCount == 1) {
				
				onSuccess();
			} else {
				onFailed();
			}
		}
	})
}

checkSignIn('khoa', '12345', function(){
	console.log("dang nhap thanh cong")
}, function(){
	console.log("dang nhap khong thanh cong")
})

module.exports.insertUser = insertUser; // neu co dau thuc thi co nghia la bang voi kq tra ve cua func
module.exports.checkSignIn = checkSignIn;

pool.on('error', function (err, client) {
	console.log(err)
});