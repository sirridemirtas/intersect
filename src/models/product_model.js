const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: { type: String, required: true },
	sku: { type: String, required: true, unique: true },
	costPrice: { type: Number, required: true },
	salePrice: { type: Number, required: true },
	stock: { type: Number, default: 0 },
	unit: { type: String, default: "ad." },
	description: String,
	tags: [String],
	active: { type: Boolean, default: true },
}, { timestamps: true })

module.exports = mongoose.model("Product", schema)