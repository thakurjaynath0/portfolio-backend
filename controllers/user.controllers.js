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
	const {otherDetails, educations, socialMedias, projects, skills} = req.body

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
		req.body.socialMedias
		socialMedia = objectSelector(socialMedias[i], ["media", "link", "user"])
		userSocialMedias = [...userSocialMedias, socialMedia]
	}
	console.log(userSocialMedias)
	
	let userProjects = []
	for(const i in projects){
		let project = projects[i]
		project = objectSelector(projects[i], ["category", "title", "description", "type", "photos", "languages", "time", "members", "user"])
		userProjects = [...userProjects, project]
	}

	let userSkills = []
	for(const i in skills){
		let skill = skills[i]
		skill = objectSelector(skills[i], ["category", "skills", "name", "level", "user"])
		userSkills = [...userSkills, skill]
	}

	await aboutServices.createCompleteUser(userId, {userOtherDetails, userEducations, userSocialMedias, userProjects, userSkills})
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