const projectPath = {
	"/project": {
		post: {
			tags: ["Project"],
			summary: "Create Project",
			operationId: "CreateProject",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Project"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "project created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["Project"],
			summary: "Get All Projects",
			operationId: "GetAllProjects",
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
	"/project/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The project id"
			}
		],
		get: {
			tags: ["Project"],
			summary: "Get Single Project",
			operationId: "GetSingleProject",
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
			tags: ["Project"],
			summary: "Update Project",
			operationId: "UpdateProject",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Project"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "project updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["Project"],
			summary: "Delete Project",
			operationId: "DeleteProject",
			responses: {
				"200": {
					description: "project deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const projectSchema = {
	Project: {
		title: "Project",
		required: ["category", "title", "description", "type", "photos", "languages", "time", "user"],
		type: "object",
		properties: {
			category: {
				type: "object"
			},
			title: {
				type: "string"
			},
			description: {
				type: "string"
			},
			type: {
				type: "string"
			},
			photos: {
				type: "array"
			},
			languages: {
				type: "array"
			},
			time: {
				type: "string"
			},
			members: {
				type: "number"
			},
			user: {
				type: "object"
			}
		}, 
		example: {
			category: "6416e63ffb40fefac284XXXX",
			title: "Note Taking",
			description: "It is notetaking web application developed using MERN",
			type: "single",
			photos: ["photo1", "photo2"],
			languages: ["html", "css", "js"],
			time: "1 months",
			user: "6415ebd5493db4c0836cXXXX"
		}
	}        
}

module.exports = {
	projectPath,
	projectSchema
}