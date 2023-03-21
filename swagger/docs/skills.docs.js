const skillsPath = {
	"/skills": {
		post: {
			tags: ["Skills"],
			summary: "Create Skill",
			operationId: "CreateSkill",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Skills"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "skill created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["Skills"],
			summary: "Get All Skills",
			operationId: "GetAllSkills",
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
	"/skills/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The skill id"
			}
		],
		get: {
			tags: ["Skills"],
			summary: "Get Single Skill",
			operationId: "GetSingleSkill",
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
			tags: ["Skills"],
			summary: "Update Skill",
			operationId: "UpdateSkill",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/Skills"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "skill updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["Skills"],
			summary: "Delete Skill",
			operationId: "DeleteSkill",
			responses: {
				"200": {
					description: "skill deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const skillsSchema = {
	Skills: {
		title: "Skills",
		required: ["category", "name", "level", "user"],
		type: "object",
		properties: {
			category: {
				type: "object"
			},
			name: {
				type: "string"
			},
			level: {
				type: "number"
			},
			user: {
				type: "object"
			}
		}, 
		example: {
			category: "6416e63ffb40fefac284XXXX",
			name: "HTML",
			level: 7,
			user: "6415ebd5493db4c0836cXXXX"
		}
	}        
}

module.exports = {
	skillsPath,
	skillsSchema
}