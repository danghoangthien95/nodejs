function phepTinh(pheptinh, soA, soB) {
	
	//bien private
	// var pt = pheptinh;
	// var soA = soA;
	// var soB = soB;

	// bien public
	this.pt = pheptinh;
	this.soA = soA;
	this.soB = soB;
	var that = this;

	// neu o trong ham tinhKq() dung this thi se ko hieu la this cua ai.
	function tinhKq() {
		// body...
		var kq = 0;
		if (that.pt == 'cong') {
			// kq = soA + soB;
			kq = that.soA + that.soB;
		}
		else if (that.pt == 'tru') {
			// kq = soA - soB;
			kq = that.soA - that.soB;
		}
		else if (that.pt == 'nhan') {
			// kq = soA * soB;
			kq = that.soA * that.soB;
		}
		else if (that.pt == 'chia') {
			// kq = soA / soB;
			kq = that.soA / that.soB;
		}
		else {
			kq = 'kiem tra lai phep tinh';
		}
		return kq;
	};
	// cach khai bao 1 phuong thuc public
	this.getString = function(){
		// body...
		// return soA + ' ' + pt + ' ' + soB + ' = ' + tinhKq();
		return that.soA + ' ' + that.pt + ' ' + that.soB + ' = ' + tinhKq();
	};
}

module.exports = phepTinh;