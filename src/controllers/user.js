const model = require("../models/user_model")

exports.getAll = (req, res) => {
	model.find({}, ["-password", "-updatedAt"], (err, customers) => {
		if (err) throw err
		res.json(customers)
	})
}

exports.register = (req, res) => {
	req.body.password = req.body.password
		? model.hashPassword(req.body.password)
		: undefined
	const user = new model(req.body)

	user.save().then((data) => {
		res.status(201).json(data)
	}).catch((err) => {
		res.status(400).json(err)
	})
}

exports.delete = (req, res) => {
	model.findOneAndDelete({ _id: req.params.userId })
		.then(() => {
			res.statusCode = 200
			res.json({ message: "Kullanıcı silindi!" })
		}).catch((err) => {
			res.statusCode = 400
			res.json(err)
		})
}