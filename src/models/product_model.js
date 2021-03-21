const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	sku: {
		type: String,
		required: true
	},
	costPrice: {
		type: Number,
		required: true
	},
	salePrice: {
		type: Number,
		required: true
	},
	stock: {
		type: Number,
		default: 0
	},
	unit: {
		type: String,
		default: "ad."
	},
	description: String,
	tags: [String],
	active: {
		type: Boolean,
		default: true
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

module.exports = mongoose.model("Product", schema)