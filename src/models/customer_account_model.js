const mongoose = require("mongoose")

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
	notes: String,
}, { timestamps: true })

module.exports = mongoose.model("CustomerAccount", schema)