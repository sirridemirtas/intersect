const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	turkishIdNumber: Number,
	phone: Number,
	address: String,
	email: String,
	notes: String
}, { timestamps: true })

schema.methods.getFullname = function () {
	return `${this.name} ${this.surname}`
}

module.exports = mongoose.model("Customer", schema)