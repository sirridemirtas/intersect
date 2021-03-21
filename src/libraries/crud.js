const express = require("express")

function Controller(opt = { model: String }) {
	this.get = function (req, res) {
		opt.model
			.findById(req.params.id)
			.then((data) => {
				res.json(data)
			})
			.catch((err) => {
				res.status(404).json({
					message: err
				})
			})
	}

	this.getAll = function (req, res) {
		console.log("heyz: ", req.query)

		opt.model.find({ /* name: new RegExp(`^${req.query.name}`, "i") */ })
			.sort("-createdAt")
			.then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json(err)
			})
	}

	this.create = function (req, res) {
		const obj = new opt.model(req.body)

		obj.save().then((data) => {
			res.status(201).json(data)
		}).catch((err) => {
			res.status(400).json(err)
		})
	}

	this.update = function (req, res) {
		opt.model.update(
			{ _id: req.params._id },
			{ $set: req.body }
		).then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json(err)
		})
	}

	this.delete = function (req, res) {
		opt.model.findOneAndDelete({ _id: req.params.id })
			.then(() => {
				res.status(200).json({ message: "Silme işlemi başarılı!" })
			}).catch((err) => {
				res.status(400).json(err)
			})
	}
}

function Router(controller) {
	const router = express.Router()

	router.get("/", controller.getAll)
	router.post("/", controller.create)
	router.get("/:id", controller.get)
	router.put("/:id", controller.update)
	router.delete("/:id", controller.delete)

	return router
}

function CRUD(model) {
	return Router(new Controller({ model: model }))
}

module.exports = CRUD