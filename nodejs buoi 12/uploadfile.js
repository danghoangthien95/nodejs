var multer = require('multer')

var storage1 = multer.diskStorage({
	// vi tri luu file, cb la callback
	destination: function (req, file, cb) {
		// body...
		cb(null, 'public/images/background')
	},
	// dat ten file la gi
	filename: function (req, file, cb) {
		// body...
		cb(null, file.originalname + Date.now())
	}
});

function getUploader(fieldname) {
	// body...
	return multer({ storage: storage1}).single(fieldname);
}


module.exports = getUploader;