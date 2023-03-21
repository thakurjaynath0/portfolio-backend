const skillsCategoryPath = {
	"/skillscategory": {
		post: {
			tags: ["SkillsCategory"],
			summary: "Create Skills Category",
			operationId: "CreateSkillsCategory",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/SkillsCategory"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "skills category created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["SkillsCategory"],
			summary: "Get All Skills Categories",
			operationId: "GetAllSkillsCategories",
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
	"/skillscategory/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The skills category id"
			}
		],
		get: {
			tags: ["SkillsCategory"],
			summary: "Get Single Skills Category",
			operationId: "GetSingleSkillsCategory",
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
			tags: ["SkillsCategory"],
			summary: "Update Skills Category",
			operationId: "UpdateSkillsCategory",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/SkillsCategory"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "skills category updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["SkillsCategory"],
			summary: "Delete Skills Category",
			operationId: "DeleteSkillsCategory",
			responses: {
				"200": {
					description: "skills category deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const skillsCategorySchema = {
	SkillsCategory: {
		title: "SkillsCategory",
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
	skillsCategoryPath,
	skillsCategorySchema
}