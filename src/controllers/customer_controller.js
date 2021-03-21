const model = require("../models/customer_model")

exports.get = (req, res) => {
	model
		.findById(req.params.customerId)
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			res.statusCode = 404

			res.json({
				message: err
			})
		})
}

exports.getAll = (req, res) => {
	model.find({}, (err, customers) => {
		if (err) throw err
		res.json(customers)
	})
}

exports.create = (req, res) => {
	const customer = new model(req.body)

	customer.save().then((data) => {
		res.statusCode = 201
		res.json(data)
	}).catch((err) => {
		res.statusCode = 400
		res.json(err)
	})
}

exports.update = (req, res) => {
	res.send("customer update")
}

exports.delete = (req, res) => {
	model.findOneAndDelete({ _id: req.params.customerId })
		.then(() => {
			res.statusCode = 200
			res.json({ message: "Kullanıcı silindi!" })
		}).catch((err) => {
			res.statusCode = 400
			res.json(err)
		})
}