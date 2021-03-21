const model = require("../models/customer_model")

exports.get = (req, res) => {
	model
		.findById(req.params.customerId)
		.then((customer) => {
			if (!customer) {
				res.status(404).json({ message: "Müşteri bulunamadı!" })
			}
			res.json(customer)
		})
		.catch((err) => {
			res.status(500).json({
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
		res.status(400).json(err)
	})
}

exports.update = (req, res) => {
	model.update(
		{ _id: req.params._id },
		{ $set: req.body }
	).then((data) => {
		res.status(200).json(data)
	}).catch((err) => {
		res.status(400).json(err)
	})
}

exports.delete = (req, res) => {
	model.findOneAndDelete({ _id: req.params.customerId })
		.then(() => {
			res.json({ message: "Kullanıcı silindi!" })
		}).catch((err) => {
			res.status(400).json(err)
		})
}