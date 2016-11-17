function Person(name, age) {
	this.name = name; // name dau la thuoc tinh cua doi tuong, name sau la truyen vao
	this.age = age;
}

var son = new Person('son', 25);
// var huong = son; // dang tao ra 1 bien cung tro den cung nho cua Son (tham chieu)
huong = new Person('huong', 35);
huong.age = 30;
console.log(son);