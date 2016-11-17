
var str = 'trung tam dao tao tin hoc khoapham';
console.log(str.indexOf('hoc'));
console.log(str.lastIndexOf('tin'));
console.log(str.substring(4)); // lay tu vi tri thu 4 den het
console.log(str.substring(4, 8)); // lay tu vi tri thu 4 den vi tri thu 8


var start = str.indexOf('dao');
console.log(str.substring(start));
// for(i in str) {
// 	console.log(str.charAt(i)) // tra ve ky tu o vitri thu i
// }

var chuoi = 'khoa, pham, trung, tam';
var mang = chuoi.split(','); // gap dau , se tach ra
console.log(mang)


// console.log('abc'.concat('def')); // it ton bo nho hon
// console.log('abc' + 'def'); // phai ton 2 vung nho

var str1 = '';
var str2 = '';
console.log(new Date().getTime());
for (var i = 0; i < 1000; i++) {
	str1 = str + i;
}

for (var i = 0; i < 1000; i++) {
	str2.concat(i)
}
console.log(new Date().getTime());
