const fileuploadPath = {
	"/upload": {
		post: {
			tags: ["FileUpload"],
			summary: "Upload Image",
			operationId: "UploadImage",
			requestBody: {
				in: "formData",
				description: "the file to upload",
				type: "file",
				content: {
					"multipart/form-data": {
						schema: {
							$ref: "#components/schemas/FileUpload"
						}
					}
				},
				required: true
			},
			responses: {
				"200": {
					description: "file uploaded",
					headers: {}
				}
			},
			deprecated: false,
			security: []
		},
	}	
}

const fileUploadSchema = {
	FileUpload: {
		title: "FileUpload",
		required: ["file"],
		type: "object",
		properties: {
			file: {
				type: "string",
				format: "binary"
			}
		}
	}
}

module.exports = {
	fileuploadPath,
	fileUploadSchema
}