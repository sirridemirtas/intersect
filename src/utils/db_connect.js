const mongoose = require("mongoose")

function mongoDBConnect(req, res, next) {
	mongoose.connect(process.env.MONGODB_SERVER, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => req, err => res.status(500).json(err))

	next()
}

module.exports = mongoDBConnect