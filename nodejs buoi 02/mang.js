// khai bao
var array = [1, 4, ,5 ,6];
var array1 = new Array(4);
var array2 = ['khoapham', 'nodejs', 'android'];

// truy cap den tung phan tung phan tu
// for (var i = 0; i < array2.length; i++) {
// 	console.log(array2[i]);
// }

// var j = 0;
// while (j < array2.length) {
// 	console.log(array2[j])
// 	j++;
// }

// console.log(array2)
// console.log(array2.join('/')) // thay doi dau trong mang
// console.log(typeof array2.join('/')) // in ra chuoi

// array2.forEach(function(element){ //in ra moi phan tu trong array
// 	console.log(element);
// });

// array2.forEach(withEach);
// function withEach(element) {
// 	console.log(element);
// }

// for(element in array2) {
// 	console.log(array2[element]);
// }

// them phan tu vao cuoi
// array2.push('reactjs');
// console.log(array2);

// xoa phan tu cuoi cung
// array2.pop();
// console.log(array2);

// tim vi tri phan tu trong mang, neu ko thay se tra ve kq la -1
// var index = array2.indexOf('nodejs');
// console.log(index);

// xoa 1 phan tu ma biet truoc vi tri cua no
// array2.splice(1, 2); // vitri muon xoa, so phan tu muon xoa
// console.log(array2);

// trong javascript function cung la 1 kieu du lieu.
// viet function, truyen vao dieu kien, func1, func2. Dung thi thuc hien func1. Sai thi thuc hien func2
function func1(){
	console.log("aaaa")
}
function func2(){
	console.log("bbbb")
}
function a(condition, func1, func2){ // co the truyen vao 1 mang gom cac function
	// if(condition) {
	// 	func1();
	// }
	// else {
	// 	func2();
	// }

	condition == true ? func1 : func2;
}
a(true, func1, func2);































