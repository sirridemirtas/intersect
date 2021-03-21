module.exports = [
	{
		type: "get",
		path: "/customers",
		handler: "customer_controller.getAll"
	}, {
		type: "post",
		path: "/customers",
		handler: "customer_controller.create"
	}, {
		type: "get",
		path: "/customers/:customerId",
		handler: "customer_controller.get"
	}, {
		type: "put",
		path: "/customers/:customerId",
		handler: "customer_controller.update"
	}, {
		type: "delete",
		path: "/customers/:customerId",
		handler: "customer_controller.delete"
	},
]