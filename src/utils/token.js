const jwt = require("jsonwebtoken")

exports.generate = (payload) => {
	// expires after half and hour (1800 seconds = 30 minutes)
	return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" })
}