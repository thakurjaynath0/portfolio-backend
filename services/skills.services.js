const Skills = require("../models/skills.models")
const User = require("../models/user.model")
const SkillsCategory = require("../models/category/skills.category.model")
const customError = require("../errors")

const createSkills = async ({obj}) => {
	const isUserValid = await User.findOne({_id: obj.user})
	if(!isUserValid){
		throw new customError.NotFound(`User with id:${obj.user} not found`)
	}

	const isCategoryValid = await SkillsCategory.findOne({_id: obj.category})
	if(!isCategoryValid){
		throw new customError.NotFound(`Skill catefory with id: ${obj.category} not found`)
	}

	const skills = await Skills.create({...obj})
	return skills
}

const getAllSkills = async () => {
	const skills = await Skills.find({})
	return skills
}

const getSingleSkills = async (skillsId) => {
	const skills = await Skills.findOne({_id: skillsId})

	if(!skills){
		throw new customError.NotFound(`skills with id: ${skillsId} not found`)
	}

	return skills
}

const updateSkills = async ({skillsId, obj}) => {
	let skills = await Skills.findOne({_id: skillsId})
	
	if(!skills){
		throw new customError.NotFound(`skills with id: ${skillsId} not found`)
	}

	if(obj?.user){
		const isUserValid = await User.findOne({_id: obj.user})
		if(!isUserValid){
			throw new customError.NotFound(`User with id:${obj.user} not found`)
		}
	}
	
	if(obj?.category){
		const isCategoryValid = await SkillsCategory.findOne({_id: obj.category})
		if(!isCategoryValid){
			throw new customError.NotFound(`Skill catefory with id: ${obj.category} not found`)
		}
	}
	
	Object.assign(skills, obj)
	await skills.save()
	
	return skills
}

const deleteSkills = async (skillsId) => {
	let skills = await skills.findOne({_id: skillsId})
	
	if(!skills){
		throw new customError.NotFound(`skills with id: ${skillsId} not found`)
	}

	skills = await skills.findOneAndRemove({_id: skillsId})
	return skills
}

module.exports = {
	createSkills,
	getAllSkills,
	getSingleSkills,
	updateSkills,
	deleteSkills
}