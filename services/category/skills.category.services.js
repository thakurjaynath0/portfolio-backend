const SkillCategory = require("../../models/category/skills.category.model")
const User = require("../../models/user.model")
const Skills = require("../../models/skills.models")
const customError = require("../../errors")

const createSkillCategory = async ({category, user}) => {
    const isUserValid = await User.findOne({_id: user})

	if(!isUserValid){
		throw new customError.NotFound(`User with id: ${user} not found`)
	}

    const skillCategory = await SkillCategory.create({category, user})
    return skillCategory
}

const getAllSkillCategories = async () => {
    const skillCategories = await SkillCategory.find({})
    return skillCategories
}

const getSkillCategory = async (id) => {
    const skillCategory = await SkillCategory.findOne({_id: id}).populate("skills")

    if (!skillCategory) {
        throw new customError.NotFound(`Skill Category with id: ${id} not found`)
    }

    return skillCategory
}

const updateSkillCategory = async ({id, category, user}) => {
    let skillCategory = await SkillCategory.findOne({_id: id})

    if (!skillCategory) {
        throw new customError.NotFound(`Skill Category with id: ${id} not found`)
    }

    if(category){
        skillCategory.category = category
    }

    if(user){
        const isUserValid = await User.findOne({_id: user})

        if(!isUserValid){
            throw new customError.NotFound(`User with id: ${user} not found`)
        }

        projectCategory.user = user
    }

    await skillCategory.save()
    return skillCategory
}

const deleteSkillCategory = async (id) => {
    let skillCategory = await SkillCategory.findOne({_id: id})

    if (!skillCategory) {
        throw new customError.NotFound(`Skill Category with id: ${id} not found`)
    }

    await Skills.deleteMany({ category: id })

    skillCategory = await SkillCategory.findOneAndRemove({_id: id})
    return skillCategory
}

module.exports = {
    createSkillCategory,
    getAllSkillCategories,
    getSkillCategory,
    updateSkillCategory,
    deleteSkillCategory
}
