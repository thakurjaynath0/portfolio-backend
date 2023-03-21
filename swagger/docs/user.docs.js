const userPath = {
	"/users": {
		post: {
			tags: ["User"],
			summary: "Create User",
			operationId: "CreateUser",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/User"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "user created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["User"],
			summary: "Get All Users",
			operationId: "GetAllUsers",
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
	"/users/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The user id"
			}
		],
		get: {
			tags: ["User"],
			summary: "Get Single User",
			operationId: "GetSingleUser",
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
			tags: ["User"],
			summary: "Update User",
			operationId: "UpdateUser",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/User"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "user updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["User"],
			summary: "Delete User",
			operationId: "DeleteUser",
			responses: {
				"200": {
					description: "user deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	},
	"/users/details/{username}": {
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
		get: {
			tags: ["User"],
			summary: "Get User Details",
			operationId: "GetUserDetails",
			responses: {
				"200": {
					description: "",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const userSchema = {
	User: {
		title: "User",
		required: ["username", "name", "picture"],
		type: "object",
		properties: {
			username: {
				type: "string",
				unique: true
			},
			name: {
				type: "string"
			},
			picture: {
				type: "string",
			}
		}, 
		example: {
			username: "nikhil",
			name: "Nikhil Thakur",
			picture: "dirname/uploads/user.jpg"
		}
	}        
}

module.exports = {
	userPath,
	userSchema
}