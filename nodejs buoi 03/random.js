// function count(max, min) {
// 	for(var i = 0; i < 200; i++) {
// 		console.log(Math.floor(min + (max - min + 1) * Math.random()))
// 	}
// }
// count(99,10)



function check(soA, soB, isAdd, f1, f2) {
	// body...
	if(isAdd) {
		f1(soA, soB)
	} else {
		f2(soA, soB)
	}
}
function f1(soA, soB) {
	// body...
	console.log(soB + soA) ;
}
function f2(soA, soB) {
	// body...
	console.log(soB - soA) ;
}

check(1, 2, false, f1, f2);

