function Diem(tungDo, hoanhDo) {
	this.tungDo = tungDo;
	this.hoanhDo = hoanhDo;
}

function tamGiac(A, B, C) {
	this.A = A; 
	this.B = B; 
	this.C = C;
	// private
	function tinhCD(a, b){
		var dx = a.tungDo - b.tungDo;
		var dy = a.hoanhDo - b.hoanhDo;
		return Math.sqrt(dx*dx + dy*dy);
	}
	// public
	this.tinhChuVi = function(){
		return tinhCD(A, B) + tinhCD(B, C) + tinhCD(A, C);
	}
}

var A1 = new Diem(0, 1);
var B1 = new Diem(1, 0);
var C1 = new Diem(0, 0);
var tamGiac1 = new tamGiac(A1, B1, C1) 

var A2 = new Diem(0, 2);
var B2 = new Diem(2, 0);
var C2 = new Diem(0, 0);
var tamGiac2 = new tamGiac(A2, B2, C2) 

var A3 = new Diem(0, 3);
var B3 = new Diem(3, 0);
var C3 = new Diem(0, 0);
var tamGiac3 = new tamGiac(A3, B3, C3) 

var A4 = new Diem(0, 4);
var B4 = new Diem(4, 0);
var C4 = new Diem(0, 0);
var tamGiac4 = new tamGiac(A4, B4, C4) 

var A5 = new Diem(0, 5);
var B5 = new Diem(5, 0);
var C5 = new Diem(0, 0);
var tamGiac5 = new tamGiac(A5, B5, C5) 

var arr = [tamGiac1, tamGiac2, tamGiac3, tamGiac4, tamGiac5];

console.log(tamGiac1.tinhChuVi());

var mapChuVi = arr.map(function(tamGiac){
	return tamGiac.tinhChuVi();
})
console.log(mapChuVi);

var filterChuVi = arr.filter(function(tamGiac){
	return (tamGiac.tinhChuVi()) > 5;
});
console.log(filterChuVi)

var mapChuVi1 = filterChuVi.map(function(tamGiac){
	return tamGiac.tinhChuVi();
})
console.log(mapChuVi1)