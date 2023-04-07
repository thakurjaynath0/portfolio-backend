const { otherDetailsSchema } = require("./otherDetails.docs")
const { educationSchema } = require("./education.docs")
const { socialMediaSchema } = require("./socialMedias.docs")
const { projectSchema } = require("./project.docs")
const { skillsSchema } = require("./skills.docs")
const { projectCategorySchema } = require("./project.category.docs")
const { skillsCategorySchema } = require("./skills.category.docs")

const createUserPath = {
	"/users/createuser/{id}": {
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
		post: {
			tags: ["CreateUser"],
			summary: "Create User With Complete Details",
			operationId: "CreateUser",
			requestBody: {
				description: "",
				content: {
					"application/json": {
						schema: {
							$ref: "#components/schemas/CreateUser"
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
		}
	}
}	

const createUserSchema = {
	CreateUser: {
		title: ["CreateUser"],
		type: "object",
		properties: {
			otherDetails: otherDetailsSchema.UserDetails,
			education: educationSchema.Education,
			socialMedias: socialMediaSchema.SocialMedia,
			projectCategory: projectCategorySchema.ProjectCategory,
			projects: projectSchema.Project,
			skillsCategory: skillsCategorySchema.SkillsCategory,
			skills: skillsSchema.Skills
		},
		example: {
			otherDetails: {
				tagline: "Web Developer",
				email: "test@gmail.com",
				description: "Hi I am Web Developer, mainly practcing backend",
				age: 21,
				contact: "9813336677",
				from: "Nepal",
				user: "6415ebd5493db4c083XXXXX"
			},
			educations: [
				{
					course: "B.Tech",
					institution: "Example University",
					location: "Mars",
					from: "2217",
					to: "2419",
					user: "6415ebd5493db4c083XXXXX"
				}
			],
			socialMedias: [
				{
					media: "facebook",
					link: "www.facebook.com/nikhil",
					user: "6415ebd5493db4c083XXXXX"
				},
				{
					media: "instagram",
					link: "www.instagram.com/nikhil",
					user: "6415ebd5493db4c083XXXXX"
				}
			],
			projectCategory: [
				{
					category: "Web Development",
					user: "6415ebd5493db4c083XXXXX",
					projects: [
						{
							title: "Note Taking",
							description: "It is notetaking web application developed using MERN",
							type: "single",
							photos: ["photo1", "photo2"],
							languages: ["html", "css", "js"],
							time: "1 months"
						}
					],
				}
			],
			skillsCategory: [
				{
					category: "Web Development",
					user: "6415ebd5493db4c083XXXXX",
					skills: [
						{
							name: "HTML",
							level: 7
						},
						{
							name: "CSS",
							level: 6
						}
					]
				}
			]
		}	
	}
}

module.exports = {
	createUserPath,
	createUserSchema
}