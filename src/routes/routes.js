module.exports = [
	{
		handler: "customer_controller.getAll",
		path: "/customers",
		type: "get"
	}, {
		handler: "customer_controller.create",
		path: "/customers",
		type: "post"
	}, {
		handler: "customer_controller.get",
		path: "/customers/:customerId",
		type: "get"
	}, {
		handler: "customer_controller.update",
		path: "/customers/:customerId",
		type: "put"
	}, {
		handler: "customer_controller.delete",
		path: "/customers/:customerId",
		type: "delete"
	}, {
		handler: "product_controller.getAll",
		path: "/products",
		type: "get"
	}, {
		handler: "product_controller.create",
		path: "/products",
		type: "post"
	}, {
		handler: "product_controller.get",
		path: "/products/:productId",
		type: "get"
	}, {
		handler: "product_controller.update",
		path: "/products/:productId",
		type: "put"
	}, {
		handler: "product_controller.delete",
		path: "/products/:productId",
		type: "delete"
	},
]