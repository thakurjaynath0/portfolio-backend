const educationPath = {
	"/education": {
		post: {
			tags: ["Education"],
			summary: "Create Education",
			operationId: "CreateEducation",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Education"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "education created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["Education"],
			summary: "Get All Educations",
			operationId: "GetAllEducations",
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
	"/education/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The education id"
			}
		],
		get: {
			tags: ["Education"],
			summary: "Get Single Education",
			operationId: "GetSingleEducation",
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
			tags: ["Education"],
			summary: "Update Education",
			operationId: "UpdateEducation",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Education"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "education updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["Education"],
			summary: "Delete Education",
			operationId: "DeleteEducation",
			responses: {
				"200": {
					description: "education deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const educationSchema = {
	Education: {
		title: "Education",
		required: ["course", "institution", "location", "from", "to", "user"],
		type: "object",
		properties: {
			course: {
				type: "string"
			},
			institution: {
				type: "string"
			},
			location: {
				type: "string"
			},
			from: {
				type: "number"
			},
			to: {
				type: "string"
			},
			user: {
				type: "object"
			}
		}, 
		example: {
			course: "B.Tech",
			institution: "Example University",
			location: "Mars",
			from: "2217",
			to: "2419",
			user: "6415ebd5493db4c083XXXXX"
		}
	}        
}

module.exports = {
	educationPath,
	educationSchema
}