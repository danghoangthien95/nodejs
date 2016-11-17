// function Person() {
// 	this.name = "Khoa Pham";
// 	this.phone = "0123456789";
// 	this.address = "90 Le Thi Rieng";
// 	this.cost = 1000;
// 	this.money = 500; 
// }
// var khoa = new Person();
// console.log(khoa.name);

// doi tuong dung nhieu lan
// function Person2(name, address, tel, cash, account, wife) {
// 	this.ten = name;
// 	this.diaChi = address;
// 	this.sdt = tel;
// 	this.tienMat = cash;
// 	this.soDu = account;
// 	this.doiSDT = function(soMoi) {
// 		this.sdt = soMoi;
// 	};
// 	this.diLam = function() {
// 		this.tienMat = this.tienMat + 200;
// 	};
// 	this.rutTien = function(soTienRut) {
// 		this.tienMat = this.tienMat + soTienRut;
// 		this.soDu = this.soDu - soTienRut;
// 	};		
// 	this.wife = wife;

// 	// đa hình
// 	this.toString = function(){
// 		return this.ten + ' sdt ' + this.sdt + ' so tien ' + (this.tienMat + this.soDu); 
// 	}
// }

// console.log('so dien thoai: ' + son.sdt)
// son.doiSDT('9876543210')
// console.log('so dien thoai moi: ' + son.sdt)

// console.log('so tien ban dau: ' + son.tienMat)
// son.diLam();

// son.rutTien(200);
// console.log('so tien hien tai: ' + son.tienMat)
// console.log('so du hien tai: ' + son.soDu)

var huong = new Person2('huong huong', 'thu duc', '9876543210', 123232, 8787348, null)
var son = new Person2('ngoc son', 'thu duc', '0123456789', 2000, 1000, huong)
// console.log(son)
// console.log(huong)

// cach khai bao 1 phuong thuc cho 1 class co san
// Person2.prototype.deleteWife = function() {
// 	this.deleteWife = null;
// };
// son.deleteWife()
// console.log(son)

// cach khai bao cho lop String
// String.prototype.abc = function(){
// 	console.log('khoa pham');
// }
// 'node'.abc()

// doi tuong chi dung 1 lan
// var giamDoc = {
// 	ten : 'khoa pham',
// 	sdt : '0123456789'
// }
// console.log(giamDoc);
// console.log(giamDoc.ten);

// cach khac, it dung
// var abc = new Object();
// abc.xyz = 'nodejs'
// console.log(abc)

// da hinh
// console.log(son + '');

function Person2(name, address, tel, cash, account, wife) {
	this.ten = name;
	this.diaChi = address;
	this.sdt = tel;
	var tienMat = cash;
	var soDu = account;
	this.doiSDT = function(soMoi) {
		this.sdt = soMoi;
	};
	this.diLam = function() {
		this.tienMat = this.tienMat + 200;
	};
	this.rutTien = function(soTienRut) {
		this.tienMat = this.tienMat + soTienRut;
		this.soDu = this.soDu - soTienRut;
	};		
	this.wife = wife;

	// đa hình
	this.toString = function(){
		return this.ten + ' sdt ' + this.sdt + ' so tien ' + (this.tienMat + this.soDu); 
	}

	this.xemTaiKhoan = function(){
		return tienMat;
	}

	// thao tac bien private
	this.ganTaiKhoan = function(soTienMatMoi){
		tienMat = soTienMatMoi;
	}

	this.inThongTin = inTien;
	function inTien() {
		console.log(this.ten + ' co ' + tienMat + ' tien mat.');
	}
}

// console.log(son)
son.ganTaiKhoan(4000);
console.log(son.xemTaiKhoan())
son.inThongTin()








