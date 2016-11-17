var x = {myProp: "value"};
var y = Object.assign({}, x);

console.log(y);
x.myProp = 'changed';

console.log('changed------------');
console.log(x);
console.log(y);