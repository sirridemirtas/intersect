const model = require("../models/product_model")

exports.get = (req, res) => {
	model
		.findById(req.params.productId)
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

	model.find({})
		.limit(50)
		.sort("-createdAt")
		.select({ name: true, createdAt: true })
		.then(products => {
			res.json(products)
		})
		.catch((err) => {
			throw err
		})
}

exports.create = (req, res) => {
	const product = new model({
		name: req.body.name,
		sku: req.body.sku,
		costPrice: req.body.costPrice,
		salePrice: req.body.salePrice,
		stock: req.body.stock,
		unit: req.body.unit,
		description: req.body.description,
	})

	product.save().then((data) => {
		res.statusCode = 201
		res.json(data)
	}).catch((err) => {
		res.statusCode = 400
		res.json(err)
	})
}

exports.update = (req, res) => {
	res.send("product update")
}

exports.delete = (req, res) => {
	model.findOneAndDelete({ _id: req.params.productId })
		.then(() => res.json({ message: "Ürün silindi!" }))
		.catch(err => res.status(500).json(err))
}