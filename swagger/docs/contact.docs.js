const contactPath = {
	"/contact/{username}": {
		parameters: [
			{
				in: "path",
				name: "username",
				schema: {
					type: "string"
				},
				required: true,
				description: "The user's username"
			}
		],
		post: {
			tags: ["Contact"],
			summary: "Send Message",
			operationId: "SendMessage",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Contact"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "message sent",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
	}	
}

const contactSchema = {
	Contact: {
		title: "Contact",
		required: ["name", "email", "phone", "message"],
		type: "object",
		properties: {
			name: {
				type: "string",
			},
			email: {
				type: "string"
			},
			phone: {
				type: "string",
			},
			message: {
				type: "string"
			}
		}, 
		example: {
			name: "Nikhil",
			email: "test@gmail.con",
			phone: "98765XXXXX",
			message: "Hello there."
		}
	}
}

module.exports = {
	contactPath,
	contactSchema
}