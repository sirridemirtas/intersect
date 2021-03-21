const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const CRUD = require("./src/libraries/crud")

/**
 * App
 */
const app = express()
require("dotenv").config()

const middlewares = [
	[cors()],
	[bodyParser.json()],
	[bodyParser.urlencoded({ extended: true })],
	[express.static("public")],
	//["/api", require("./src/controllers/auth_controller").authenticate],
	["/api", require("./src/utils/db_connect")],
	//["/api/products", new CRUD(require("./src/models/product_model"))],
	["/api", require("./src/routes")]
]

for (const middleware of middlewares) {
	app.use(...middleware)
}

/**
 * Server
 */
const port = parseInt(process.env.PORT, 10) || 3000

app.listen(port, () => {
	console.log(`Intersect app listening at http://localhost:${port}`)
})