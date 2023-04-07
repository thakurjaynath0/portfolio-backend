const {StatusCodes} = require("http-status-codes")
const userServices = require("../services/user.services")
const aboutServices = require("../services/about.services")
const objectSelector = require("../utils/object/objectSelector")

const schemaObj = ["username", "name", "picture"]

const createUser = async (req, res) => {
	const obj = objectSelector(req.body,schemaObj )
	const user = await userServices.createUser({obj});
	res.status(StatusCodes.CREATED).json({data: user})
}

const getAllUsers = async (req, res) => {
	const users = await userServices.getAllUsers()
	res.status(StatusCodes.OK).json({data: users, count: users.length})
}

const getSingleUser = async (req, res) => {
	const {id: userId} = req.params
	const user = await userServices.getSingleUser(userId)
	res.status(StatusCodes.OK).json({data: user})
}

const updateUser = async (req, res) => {
	const {id: userId} = req.params
	const obj = objectSelector(req.body, schemaObj)
	const user = await userServices.updateUser({userId, obj})
	res.status(StatusCodes.OK).json({data: user})
}

const deleteUser = async (req, res) => {
	const {id: userId} = req.params
	const user = await userServices.deleteUser(userId)
	res.status(StatusCodes.OK).json({data: user, msg: "User successfully delete"})
}

const createCompleteUser = async (req, res) => {
	const { id: userId } = req.params
	const {otherDetails, educations, socialMedias, projectCategory, skillsCategory} = req.body

	const userOtherDetails= objectSelector(otherDetails, ["tagline", "email", "description", "age", "contact", "from", "user"])
	
	let userEducations = []
	for(const i in educations){
		let education = educations[i]
		education = objectSelector(educations[i], ["course", "institution", "location", "from", "to", "user"])
		userEducations = [...userEducations, education]
	}

	let userSocialMedias = []
	for(const i in socialMedias){
		let socialMedia = socialMedias[i]
		socialMedia = objectSelector(socialMedias[i], ["media", "link", "user"])
		userSocialMedias = [...userSocialMedias, socialMedia]
	}
	
	let userProjectCategory = []
	for(const i in projectCategory){
		const info = {}
		let projectCategoryInfo = projectCategory[i]
		projectCategoryInfo = objectSelector(projectCategory[i], ["category", "user"])
		let userProjects = []
		for(const j in projectCategory[i].projects){
			let project = projectCategory[i].projects[j]
			project = objectSelector(projectCategory[i].projects[j], ["title", "description", "type", "photos", "languages", "time", "members"])
			userProjects = [...userProjects, project]
		}
		info.projectCategoryInfo = projectCategoryInfo
		info.userProjects = userProjects
		userProjectCategory = [...userProjectCategory, info]
	}

	let userSkillsCategory = []
	for(const i in skillsCategory){
		const info = {}
		let skillsCategoryInfo = skillsCategory[i]
		skillsCategoryInfo = objectSelector(skillsCategory[i], ["category", "user"])
		let userSkills = []
		for(const j in skillsCategory[i].skills){
			let skill = skillsCategory[i].skills[j]
			skill = objectSelector(skillsCategory[i].skills[j], ["name", "level"])
			userSkills = [...userSkills, skill]
		}
		info.skillsCategoryInfo = skillsCategoryInfo
		info.userSkills = userSkills
		userSkillsCategory = [...userSkillsCategory, info]
	}

	
	await aboutServices.createCompleteUser(userId, {userOtherDetails, userEducations, userSocialMedias, userProjectCategory, userSkillsCategory})
	res.status(StatusCodes.OK).json({ msg: "user created successfully" })
}

const getUserDetails = async (req, res) => {
	const {username} = req.params
	const userDetails = await aboutServices.getUserDetails(username)
	res.status(StatusCodes.OK).json({data: userDetails})
}

module.exports = {
	createUser,
	getAllUsers,
	getSingleUser,
	updateUser,
	deleteUser,
	getUserDetails,
	createCompleteUser
}