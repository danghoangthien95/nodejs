var CryptoJS = require("crypto-js");


const SECRET_KEY = "csdcsdcsdc54c5sd4c5s6d4c6sd45c"


function encrypt(str) {
	// body...
	return CryptoJS.AES.encrypt(str, SECRET_KEY).toString();
}
function decrypt(str) {
	return CryptoJS.AES.decrypt(str, SECRET_KEY).toString(CryptoJS.enc.Utf8);
}
var en = encrypt("khoapham");
console.log(decrypt(en))

module.exports.encrypt = encrypt; 
module.exports.decrypt = decrypt; 
