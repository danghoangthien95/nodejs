// doi tuong don thi ko dung this.
var KhoaPham = {
	diaChi : '90 Le Thi Rieng',
	khaiTruong : 2009,
	// cach khai bao phuong thuc cho 1 doi tuong rieng le
	getInfo : function() {
		// body...
		return this.diaChi + ' Khai truong nam ' + this.khaiTruong;
	}
}

function abc() {
	console.log('saaaaa');
}

module.exports = KhoaPham;
module.exports.newMethod = abc;