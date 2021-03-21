const mongoose = require("mongoose")
/* mongoose.pluralize(null) */

const schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	turkishIdNumber: Number,
	phone: Number,
	address: String,
	email: String,
	notes: String/* ,
	updatedAt: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now
	} */
}, { timestamps: true })

module.exports = mongoose.model("Customer", schema)