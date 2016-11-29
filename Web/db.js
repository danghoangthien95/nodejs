var pg = require('pg');

var config = {
	user: 'postgres',
	password: 'KHOAPHAM',
	database: 'NHAPHUONG',
	host: 'localhost',
	port: 5432,
	max: 10,
	idleTimeoutMillis:1000
}

var pool = new pg.Pool(config);

function queryDB(sql, cb){
  pool.connect(function(err, client, done){
    if(err){
      	console.log('LOI KET NOI ' + err);
    } else{
    	done();
    	client.query(sql, cb);
    }
  });
} 
function insertHinh(id, funcSuccess, funcFailed) {
	// body...
	var sql = `SELECT * FROM "NHAPHUONG" WHERE id = '${id}'`;
	console.log(sql)
	queryDB(sql, function (err, result) {
		// body...
		if(err) {
			console.log(err)
			funcFailed(err, result)
		} else {
			console.log(result)
			funcSuccess(err, result)
		}
	})
}

function like(id, cb) {
	
	// var sql = `UPDATE "NHAPHUONG" SET "like" = "like" + 1 WHERE id = ${id}`;

	var sql = 'UPDATE "NHAPHUONG" SET "like" = "like" + 1 WHERE "id" = ' + id;
	console.log(sql)
	queryDB(sql, function (err, result) {
		// body...
		if(result.rowCount == 1) {
			cb(1)
		} else {
			cb(2)
		}
	})
}

function dislike(id, cb) {
	var sql = 'UPDATE "NHAPHUONG" SET "dislike" = "dislike" + 1 WHERE "id" = ' + id;
	console.log(sql)
	queryDB(sql, function (err, result) {
		// body...
		if(result.rowCount == 1) {
			cb(1)
		} else {
			cb(2)
		}
	})
}

module.exports.insertHinh = insertHinh; // neu co dau thuc thi co nghia la bang voi kq tra ve cua func
module.exports.like = like; // neu co dau thuc thi co nghia la bang voi kq tra ve cua func
module.exports.dislike = dislike; // neu co dau thuc thi co nghia la bang voi kq tra ve cua func

pool.on('error', function (err, client) {
	console.log(err)
});