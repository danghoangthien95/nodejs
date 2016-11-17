var arr = [];
for (var i = 0; i < 10000000; i++) {
	arr.push(i);
}


var start = new Date().getTime();
// chen doan code thu 1
for (var i = 0; i < arr.length; i++) {
	
}
var stop1 = new Date().getTime();
console.log(stop1 - start);



// chen doan code thu 2
arr.forEach(function(argument) {
	// body...
})


var stop2 = new Date().getTime();
console.log(stop2 - stop1);