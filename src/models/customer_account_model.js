const mongoose = require("mongoose")

const schema = mongoose.Schema({
	description: String,
}, { timestamps: true })

module.exports = mongoose.model("CustomerAccount", schema)