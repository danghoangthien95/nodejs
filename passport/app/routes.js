module.exports = function (app) {
		// body...

	app.get('/',function (req, res) {
		// body...
		res.render('index')
	}) 
	app.get('/signup',function (req, res) {
		// body...
		res.render('signup')
	})  
	app.get('/login',function (req, res) {
		// body...
		res.render('login')
	}) 
	app.get('/profile',function (req, res) {
		// body...
		res.render('profile')
	}) 
}