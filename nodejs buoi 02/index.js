// tinh giai thua cua so n
function tinhgiaithua(n) {
	var giaithua = 1;
	for (var i = 1; i <= n; i++) {
		giaithua = giaithua * i;
	}
	return giaithua;
}
console.log(tinhgiaithua(15));

function tinhgiaithua1(n) {
	var giaithua = 1;
	for (var i = n; i > 1; i--) {
		giaithua = giaithua * i;
	}
	return giaithua;
}
console.log(tinhgiaithua1(15));


// function tinhgiaithua1(n) {
// 	var giaithua = n;
// 	while(n > 1) {
// 		giaithua = giaithua * --n;
// 	}
// 	return giaithua;
// }
// console.log(tinhgiaithua1(3));

// XO SO
// var docdac = 999;
// var so = "";
// var n = 0;
// while(so!=docdac){
//   n++;
//   so = "";
//   for(var i = 1; i<=3; i++){
//     var r = Math.trunc(Math.random()*10)
//     so = so + r;
//   }
//   console.log(so);
// }
// console.log("Tra ve so thu: " + n);

// XO SO 02
// var kq = 999;
// var soRandom = Math.trunc(Math.random()*1000)
// var i = 1;
// // for (;soRandom != kq;) {
// while (soRandom != kq) {
//  	soRandom = Math.trunc(Math.random()*1000);
//  	console.log('lan ' + ++i + ': ' + soRandom);
//  }





















