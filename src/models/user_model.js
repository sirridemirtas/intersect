const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const schema = mongoose.Schema({
	name: String,
	surname: String,
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		unique: true,
		sparse: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		sparse: true,
		lowercase: true,
		trim: true
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

schema.statics.hashPassword = function (password) {
	return bcrypt.hashSync(password + process.env.USER_PASSWORD_SALT, 10)
}

schema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(
		password + process.env.USER_PASSWORD_SALT,
		this.password
	)
}

module.exports = mongoose.model("User", schema)