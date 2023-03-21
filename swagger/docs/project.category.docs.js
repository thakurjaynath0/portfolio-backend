const projectCategoryPath = {
	"/projectcategory": {
		post: {
			tags: ["ProjectCategory"],
			summary: "Create Project Category",
			operationId: "CreateProjectCategory",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/ProjectCategory"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "project category created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["ProjectCategory"],
			summary: "Get All Project Categories",
			operationId: "GetAllProjectCategories",
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
	"/projectcategory/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The project category id"
			}
		],
		get: {
			tags: ["ProjectCategory"],
			summary: "Get Single Project Category",
			operationId: "GetSingleProjectCategory",
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
			tags: ["ProjectCategory"],
			summary: "Update Project Category",
			operationId: "UpdateProjectCategory",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/ProjectCategory"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "project category updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["ProjectCategory"],
			summary: "Delete Project Category",
			operationId: "DeleteProjectCategory",
			responses: {
				"200": {
					description: "project category deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const projectCategorySchema = {
	ProjectCategory: {
		title: "ProjectCategory",
		required: ["category", "user"],
		type: "object",
		properties: {
			category: {
				type: "string",
			},
			user: {
				type: "object",
			}
		}, 
		example: {
			category: "Mobile Application Development",
			user: "6415ebd5493db4c083XXXXX"
		}
	}        
}

module.exports = {
	projectCategoryPath,
	projectCategorySchema
}