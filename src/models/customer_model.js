const mongoose = require("mongoose")
const isTurkishId = require("../utils/isTurkishId")

const schema = mongoose.Schema({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	turkishIdNumber: {
		type: Number, unique: true, validate: {
			validator: (t) => isTurkishId(t)
		}
	},
	phone: { type: Number, unique: true },
	address: String,
	email: { type: Number, unique: true },
	notes: String
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })

schema.index({
	name: "text",
	surname: "text",
	notes: "text"
}/* , {
	weights: {
		name: 5,
		surname: 4,
		notes: 1
	}
} */)

schema.virtual("fullName").get(function () {
	return `${this.name} ${this.surname}`
})

schema.virtual("uri").get(function () {
	return `/customers/${this._id}`
})

module.exports = mongoose.model("Customer", schema)