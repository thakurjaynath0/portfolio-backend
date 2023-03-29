const User = require("../models/user.model")
const ProjectCategory = require("../models/category/project.category.model")
const SkillCategory = require("../models/category/skills.category.model")
const Project = require("../models/project.models")
const Skills = require("../models/skills.models")
const OtherDetails = require("../models/otherDetails.model")
const Education = require("../models/education.model")
const SocialMedias = require("../models/socialMedias.model")
const customError = require("../errors")

const createCompleteUser = async (userId, {userOtherDetails, userEducations, userSocialMedias, userProjects, userSkills}) => {
	const isUserValid = await User.findOne({_id: userId})

	if(!isUserValid){
		throw new customError.NotFound(`User with id: ${userId} not found`)
	}

	await OtherDetails.create({ ...userOtherDetails })

	for(const i in userEducations){
		const education = userEducations[i]
		await Education.create({ ...education })
	}

	for(const i in userSocialMedias){
		const socialMedia = userSocialMedias[i]
		await SocialMedias.create({ ... socialMedia })
	}

	for(const i in userProjects){
		const project = userProjects[i]
		await Project.create({ ...project })
	}

	for(const i in userSkills){
		const skills = userSkills[i]
		await Skills.create({ ...skills })
	}
}

const deleteAllUserDetail = async (userId) => {
	await OtherDetails.deleteMany({ user: userId })

	await Education.deleteMany({ user: userId })

	await SocialMedias.deleteMany({ user: userId })

	await ProjectCategory.deleteMany({ user: userId })

	await Project.deleteMany({ user: userId })

	await SkillCategory.deleteMany({ user: userId })

	await Skills.deleteMany({ user: userId })
}

const getUserDetails = async (username) => {
	let userDetails = {}
	let about = {}

	const user = await User.findOne({username: username})
	
	if(!user){
		throw new customError.NotFound(`User with username: ${username} not found`)
	}

	userDetails.name = user.name
	user.picture == null ? userDetails.picture="no photo" : userDetails.picture=user.picture
	
	const otherDetails = await OtherDetails.findOne({user: user._id})
	about.tagline = otherDetails?.tagline
	about.email = otherDetails?.email
	about.description = otherDetails?.description
	let others = {}
	others.age = otherDetails?.age
	others.contact = otherDetails?.contact
	others.from = otherDetails?.from
	about.others = others

	const education = await Education.find({user: user._id})
	userDetails.education = education

	const socialMedias = await SocialMedias.find({user: user._id})
	userDetails.socialMedias = socialMedias

	const projectsByCategory = await ProjectCategory.find({user: user._id}).populate("projects")
	let projects = []
	for(const i in projectsByCategory){
		const curr = projectsByCategory[i]
		if(curr.projects.length !== 0){
			projects = [...projects, curr]
		}
	}
	userDetails.projects = projects

	const skillsByCategory = await SkillCategory.find({user: user._id}).populate("skills")
	let skills = []
	for(const i in skillsByCategory){
		const curr = skillsByCategory[i]
		if(curr.skills.length !== 0){
			skills = [...skills, curr]
		}
	}
	userDetails.skills = skills

	userDetails.about = about
	return userDetails
}

module.exports = {
	createCompleteUser,
	getUserDetails,
	deleteAllUserDetail
}