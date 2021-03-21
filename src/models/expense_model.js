const mongoose = require("mongoose")

const schema = mongoose.Schema({
	category: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	description: String,
	updatedAt: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model("Expense", schema)