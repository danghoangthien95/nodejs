// mang nang cao
function Person(name, age, salary) {
	this.ten = name;
	this.tuoi = age;
	this.luong = salary;
}

var object1 = new Person('object1', 12, 10000)
var object2 = new Person('object2', 73, 70000)
var object3 = new Person('object3', 34, 30000)
var object4 = new Person('object4', 85, 10000)
var object5 = new Person('object5', 16, 90000)

var arr = [object1, object2, object3, object4, object5];

// kiem tra: every(ktra cac ptu, neu tat ca thoa man tra ve true, else false), some(chi can 1 thang dung thi tra ve true)
// var checkSalary = arr.every(function(e){
// 	return e.luong > 50;
// });
// console.log(checkSalary);

// var checkSalary2 = arr.some(function(e){
// 	return e.luong == 10000;
// });
// console.log(checkSalary2);

// tim kiem : find(tra ve doi tuong phu hop dieu kien, ko tim duoc tra ve undefined), findIndex(tra ve vi tri doi tuong dau tien phu hop dieu kien, ko tim duoc tra ve -1)
// var findObject = arr.find(function(e){
// 	return e.luong == 10000;
// });
// console.log(findObject);

// var findObject2 = arr.findIndex(function(e){
// 	return e.luong == 1000;
// });
// console.log(findObject2);


// loc: filter(tra ve 1 mang cac doi tuong thoa man dieu kien, neu ko thoa man tra ve mang rong)
// var filterObject = arr.filter(function(e){
// 	return e.luong == 10000;
// });
// console.log(filterObject)

// sap xep mang: 
// var sortObject = arr.sort(function(nguoi1, nguoi2){
// 	if(nguoi1.tuoi > nguoi2.tuoi){
// 		return 1;
// 	}else if(nguoi1.tuoi < nguoi2.tuoi){
// 		return -1;
// 	}else {
// 		return 0;
// 	}
// });
// console.log(sortObject)

// var sortObject2 = arr.sort(function(nguoi1, nguoi2){
// 	if(nguoi1.tuoi > nguoi2.tuoi && nguoi1.luong > nguoi2.luong){
// 		return 1;
// 	}else if(nguoi1.tuoi < nguoi2.tuoi && nguoi1.luong < nguoi2.luong){
// 		return -1;
// 	}else {
// 		return 0;
// 	}
// });
// console.log(sortObject2)

// map: 
var mapObject = arr.map(function(e){
	return 'nguoi nay ten ' + e.ten + ' co ' + e.tuoi + ' va ' + e.luong + 'dong';
});
console.log(mapObject)
console.log(arr)
