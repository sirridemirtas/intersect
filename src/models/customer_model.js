const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	turkishIdNumber: { type: Number, unique: true, length: 11 },
	phone: { type: Number, unique: true },
	address: String,
	email: { type: Number, unique: true },
	notes: String
}, { timestamps: true })

schema.methods.getFullname = function () {
	return `${this.name} ${this.surname}`
}

module.exports = mongoose.model("Customer", schema)