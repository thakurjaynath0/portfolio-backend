const { userSchema } = require("./user.docs")
const { otherDetailsSchema } = require("./otherDetails.docs")
const { educationSchema } = require("./education.docs")
const { socialMediaSchema } = require("./socialMedias.docs")
const { projectSchema } = require("./project.docs")
const { skillsSchema } = require("./skills.docs")
const { projectCategorySchema } = require("./project.category.docs")
const { skillsCategorySchema } = require("./skills.category.docs")

const createUserPath = {
	"/users/createuser": {
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
			user: userSchema.User,
			otherDetails: otherDetailsSchema.UserDetails,
			education: educationSchema.Education,
			socialMedias: socialMediaSchema.SocialMedia,
			projectCategory: projectCategorySchema.ProjectCategory,
			projects: projectSchema.Project,
			skillsCategory: skillsCategorySchema.SkillsCategory,
			skills: skillsSchema.Skills
		},
		example: {
			user: {
				username: "nikhil",
				name: "Nikhil Thakur",
				picture: "dirname/uploads/user.jpg"
			},
			otherDetails: {
				tagline: "Web Developer",
				email: "test@gmail.com",
				description: "Hi I am Web Developer, mainly practcing backend",
				age: 21,
				contact: "9813336677",
				from: "Nepal",
			},
			educations: [
				{
					course: "B.Tech",
					institution: "Example University",
					location: "Mars",
					from: "2217",
					to: "2419",
				}
			],
			socialMedias: [
				{
					media: "facebook",
					link: "www.facebook.com/nikhil",
				},
				{
					media: "instagram",
					link: "www.instagram.com/nikhil",
				}
			],
			projectCategory: [
				{
					category: "Web Development",
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