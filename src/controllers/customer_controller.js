const Customer = require("../models/customer_model")

exports.get = (req, res) => {
	Customer.findById(req.params.customerId)
		.then(customer => {
			if (!customer) {
				res.status(404).json({ message: "Müşteri bulunamadı!" })
			}
			res.json(customer)
		})
		.catch((err) => res.status(500).send(err))
}

exports.getAll = (req, res) => {
	const perPage = parseInt(req.query.limit) || 100
	const page = parseInt(req.query.page) || 1

	Customer.find({ ...req.query, page: undefined, limit: undefined })
		.limit(perPage).skip(perPage * (page - 1))
		.sort({ name: "asc" })
		.then(customers => res.json(customers))
		.catch((err) => res.status(500).send(err))
}

exports.create = (req, res) => {
	new Customer(req.body).save()
		.then(data => res.status(201).json(data))
		.catch((err) => res.status(500).send(err))
}

exports.update = (req, res) => {
	Customer.update({ _id: req.params._id }, { $set: req.body })
		.then(data => res.status(200).json(data))
		.catch((err) => res.status(500).send(err))
}

exports.delete = (req, res) => {
	Customer.findOneAndDelete({ _id: req.params.customerId })
		.then(() => res.json({ message: "Kullanıcı silindi!" }))
		.catch(err => res.status(500).json(err))
}