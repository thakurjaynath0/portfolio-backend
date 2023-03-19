const skillCategoryService = require("../../services/category/skills.category.services")
const {StatusCodes} = require("http-status-codes")

const createSkillCategory = async (req, res) => {
    const {category, user} = req.body
    const skillCategory = await skillCategoryService.createSkillCategory({category, user})
    res.status(StatusCodes.CREATED).json({data: skillCategory})
}

const getAllSkillCategories = async (req, res) => {
    const skillCategories = await skillCategoryService.getAllSkillCategories()
    res.status(StatusCodes.OK).json({data: skillCategories, count: skillCategories.length})
}

const getSkillCategory = async (req, res) => {
    const {id} = req.params
    const skillCategory = await skillCategoryService.getSkillCategory(id)
    res.status(StatusCodes.OK).json({data: skillCategory})
}

const updateSkillCategory = async (req, res) => {
    const {id} = req.params
    const {category, user} = req.body
    const skillCategory = await skillCategoryService.updateSkillCategory({id, category, user})
    res.status(StatusCodes.OK).json({data: skillCategory})
}

const deleteSkillCategory = async (req, res) => {
    const {id} = req.params
    const skillCategory = await skillCategoryService.deleteSkillCategory(id)
    res.status(StatusCodes.OK).json({data: skillCategory, msg: 'Skill Category was successfully deleted'})
}

module.exports = {
    createSkillCategory,
    getAllSkillCategories,
    getSkillCategory,
    updateSkillCategory,
    deleteSkillCategory
}
