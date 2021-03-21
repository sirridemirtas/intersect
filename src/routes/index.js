const router = require("express").Router()
const routes = require("./routes")

for (const route of routes) {
	const [controller, action] = String(route.handler).split(".")

	router[route.type](
		route.path,
		require("../controllers/" + controller)[action]
	)
}

module.exports = router