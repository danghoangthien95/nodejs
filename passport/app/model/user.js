// dinh nghia model user sequelize
var sequelize = require('sequelize')
var bcrypt = require('bcrypt-nodejs')
module.exports = function (sequelize, DataTypes) {
	// body...
	return sequelize.define('user', {
		localemail: DataTypes.STRING,
		localpassword: DataTypes.STRING
	},
	{
		classMethods: {
			generatehash: function (password) {
				// body... su dung thu vien bcrypt de bam password
				return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
			},
		},
		instanceMethods: {
			validPassword: function (password) {
				// body... khi ng dung login vao. kiem tra mat khau ma ngdung nhap.
				return bcrypt.compareSync(password, this.localpassword)
			},
		},
	}
}