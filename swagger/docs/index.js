const config = require("../../config")

const {userPath, userSchema} = require("./user.docs")
const {	otherDetailsPath, otherDetailsSchema} = require("./otherDetails.docs")
const {educationPath, educationSchema} = require("./education.docs")
const {socialMediaPath, socialMediaSchema} = require("./socialMedias.docs")
const {	projectCategoryPath, projectCategorySchema} = require("./project.category.docs")
const {skillsCategoryPath, skillsCategorySchema} = require("./skills.category.docs")
const {projectPath, projectSchema} = require("./project.docs")
const {skillsPath, skillsSchema} = require("./skills.docs")

const paths = {
	...userPath,
	...otherDetailsPath,
	...educationPath,
	...socialMediaPath,
	...projectCategoryPath,
	...skillsCategoryPath,
	...projectPath,
	...skillsPath
}
const schemas = {
	...userSchema,
	...otherDetailsSchema,
	...educationSchema,
	...socialMediaSchema,
	...projectCategorySchema,
	...skillsCategorySchema,
	...projectSchema,
	...skillsSchema
}

const docs = {
	openapi: "3.0.0",
	info: {
		title: "Team Website",
		contact: {},
		version: "1.0.0"
	},
	servers: [
		{
			url: config.host + "/api/v1",
			variables: {}
		}
	],
	paths,
	components: {
		schemas,
		securitySchemes: {
			BearerAuth: {
				type: "http",
				scheme: "bearer"
			}
		},
	// tags: [
		// 	{
		// 		name: "Auth",
		// 		description: "Authentication"
		// 	}
		// ]
	},
	security: [{
		BearerAuth: []
	}],

}

module.exports = docs