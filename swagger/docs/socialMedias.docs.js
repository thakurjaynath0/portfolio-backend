const socialMediaPath = {
	"/social/media": {
		post: {
			tags: ["SocialMedia"],
			summary: "Create SocialMedia",
			operationId: "CreateSocialMedia",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/SocialMedia"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "social media created",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		get: {
			tags: ["SocialMedia"],
			summary: "Get All SocialMedias",
			operationId: "GetAllSocialMedias",
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
	"/social/media/{id}": {
		parameters: [
			{
				in: "path",
				name: "id",
				schema: {
					type: "string"
				},
				required: true,
				description: "The social media id"
			}
		],
		get: {
			tags: ["SocialMedia"],
			summary: "Get Single SocialMedia",
			operationId: "GetSingleSocialMedia",
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
			tags: ["SocialMedia"],
			summary: "Update SocialMedia",
			operationId: "UpdateSocialMedia",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/SocialMedia"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "social media updated",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
		delete: {
			tags: ["SocialMedia"],
			summary: "Delete SocialMedia",
			operationId: "DeleteSocialMedia",
			responses: {
				"200": {
					description: "social media deleted",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		}
	}
}

const socialMediaSchema = {
	SocialMedia: {
		title: "SocialMedia",
		required: ["media", "link", "user"],
		type: "object",
		properties: {
			media: {
				type: "string",
			},
			link: {
				type: "string"
			},
			user: {
				type: "object",
			}
		}, 
		example: {
			media: "facebook",
			link: "www.facebook.com/nikhil",
			user: "6415ebd5493db4c083XXXXX"
		}
	}        
}

module.exports = {
	socialMediaPath,
	socialMediaSchema
}