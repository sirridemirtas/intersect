const mongoose = require("mongoose")

function mongoDBConnect(req, res, next) {
	const url = "mongodb://localhost:27017/deneme?readPreference=primary&ssl=false"
	//const url = "mongodb+srv://admin:i4mMH3pznpQI4Qot@cluster0.rfszd.mongodb.net/<dbname>?retryWrites=true&w=majority"
	mongoose.connect(url, { useNewUrlParser: true/* , useUnifiedTopology: true */ }).then(
		() => {
			console.log("Connected to MongoDB Server.")
		},
		err => { console.log(err) }
	)

	next()
}

module.exports = mongoDBConnect