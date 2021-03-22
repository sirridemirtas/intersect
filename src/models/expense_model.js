const mongoose = require("mongoose")

const schema = mongoose.Schema({
	category: { type: String, required: true },
	amount: { type: Number, required: true },
	description: String,
}, { timestamps: true })

module.exports = mongoose.model("CompanyExpense", schema)