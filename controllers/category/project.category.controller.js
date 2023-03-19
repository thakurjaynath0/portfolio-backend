const projectCategoryService = require("../../services/category/project.category.services")
const { StatusCodes } = require("http-status-codes")

const createProjectCategory = async (req, res) => {
    const {category, user} = req.body
    const projectCategory = await projectCategoryService.createProjectCategory({category, user})
    res.status(StatusCodes.CREATED).json({data: projectCategory})
}

const getAllProjectCategories = async (req, res) => {
    const projectCategories = await projectCategoryService.getAllProjectCategories()
    res.status(StatusCodes.OK).json({data: projectCategories, count: projectCategories.length})
}

const getProjectCategory = async (req, res) => {
    const {id} = req.params
    const projectCategory = await projectCategoryService.getProjectCategory(id)
    res.status(StatusCodes.OK).json({data: projectCategory})
}

const updateProjectCategory = async (req, res) => {
    const {id} = req.params
    const {category, user} = req.body
    const projectCategory = await projectCategoryService.updateProjectCategory({id, category, user})
    res.status(StatusCodes.OK).json({data: projectCategory})
}

const deleteSkillCategory = async (req, res) => {
    const { id } = req.params
    const projectCategory = await projectCategoryService.deleteProjectCategory(id)
    res.status(StatusCodes.OK).json({data: projectCategory, msg: "Project Category successfully deleted"})
}

module.exports = {
    createProjectCategory,
    getAllProjectCategories,
    getProjectCategory,
    updateProjectCategory,
    deleteSkillCategory
}
