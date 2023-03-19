const User = require("../models/user.model")
const OtherDetails = require("../models/otherDetails.model")
const Education = require("../models/education.model")
const SocialMedias = require("../models/socialMedias.model")
const ProjectCategory = require("../models/category/project.category.model")
const SkillCategory = require("../models/category/skills.category.model")
const customError = require("../errors")

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
	about.tagline = otherDetails.tagline
	about.email = otherDetails.email
	about.description = otherDetails.description
	about.age = otherDetails.age
	about.contact = otherDetails.contact
	about.from = otherDetails.from

	const education = await Education.find({user: user._id})
	about.education = education

	const socialMedias = await SocialMedias.find({user: user._id})
	about.socialMedias = socialMedias

	const projectsByCategory = await ProjectCategory.find({user: user._id}).populate("projects")
	let projects = []
	for(const i in projectsByCategory){
		const curr = projectsByCategory[i]
		if(curr.projects.length !== 0){
			projects = [...projects, curr]
		}
	}
	about.projects = projects

	const skillsByCategory = await SkillCategory.find({user: user._id}).populate("skills")
	let skills = []
	for(const i in skillsByCategory){
		const curr = skillsByCategory[i]
		if(curr.skills.length !== 0){
			skills = [...skills, curr]
		}
	}
	about.skills = skills

	userDetails.about = about
	return userDetails
}

module.exports = {getUserDetails}