const jwt = require("jsonwebtoken")
const model = require("../models/user_model")

exports.login = (req, res) => {
	const username = req.body.email || req.body.username
	const password = req.body.password

	if (!username || !password) {
		res.status(400).json({
			message: "Kullanıcı adı veya şifre gönderilmedi!"
		})
	}

	model.findOne({
		$or: [
			{ username: username },
			{ email: username },
			{ phone: username }
		]
	}).then(user => {
		if (user) {
			if (user.comparePassword(password)) {
				res.json({
					status: true,
					token: jwt.sign(
						{ username: user.username },
						process.env.JWT_SECRET_KEY
					)
				})
			} else {
				res.status(400).json({ message: "Hatalı şifre!" })
			}
		} else {
			res.status(400).json({ message: "Hatalı giriş!" })
		}
	}).catch(err => res.status(500).json(err))
}

exports.logout = (req, res) => {

}

exports.authenticate = (req, res, next) => {
	// Gather the jwt access token from the request header
	const authHeader = req.headers["Authorization"]
	const token = authHeader && authHeader.split(" ")[1]
	if (token == null) return res.sendStatus(401) // if there isn't any token

	jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
		if (err) return res.sendStatus(403)
		next() // pass the execution off to whatever request the client intended
	})
}