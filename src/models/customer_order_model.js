const mongoose = require("mongoose")
const Product = require("./product_model")

const schema = mongoose.Schema({
	customerId: { type: mongoose.Schema.Types.ObjectId },
	products: [Product],
	description: String,
}, { timestamps: true })

module.exports = mongoose.model("Expense", schema)