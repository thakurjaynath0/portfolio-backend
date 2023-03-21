const otherDetailsPath = {
	"/others": {
		post: {
			tags: ["UserDetails"],
			summary: "Create User Details",
			operationId: "CreateUserDetails",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/UserDetails"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "user details created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["UserDetails"],
			summary: "Get All Users Details",
			operationId: "GetAllUsersDetails",
			responses: {
				"200": {
					description: "",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	},
	"/others/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The userdetail id"
			}
		],
		get: {
			tags: ["UserDetails"],
			summary: "Get Single User Details",
			operationId: "GetSingleUserDetails",
			responses: {
				"200": {
					description: "",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		patch: {
			tags: ["UserDetails"],
			summary: "Update User Details",
			operationId: "UpdateUserDetails",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/UserDetails"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "user details updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["UserDetails"],
			summary: "Delete User Details",
			operationId: "DeleteUserDetails",
			responses: {
				"200": {
					description: "user details deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const otherDetailsSchema = {
	UserDetails: {
		title: "UserDetails",
		required: ["tagline", "email", "discription", "age", "contact", "from", "user"],
		type: "object",
		properties: {
			tagline: {
				type: "string"
			},
			email: {
				type: "string"
			},
			description: {
				type: "string"
			},
			age: {
				type: "number"
			},
			contact: {
				type: "string"
			},
			from: {
				type: "string"
			},
			user: {
				type: "object"
			}
		}, 
		example: {
			tagline: "Web Developer",
			email: "test@gmail.com",
			description: "Hi I am Web Developer, mainly practcing backend",
			age: 21,
			contact: "9813336677",
			from: "Nepal",
			user: "6415ebd5493db4c083XXXXX"
		}
	}        
}

module.exports = {
	otherDetailsPath,
	otherDetailsSchema
}