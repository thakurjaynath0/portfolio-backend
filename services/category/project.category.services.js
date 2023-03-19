const ProjectCategory  = require("../../models/category/project.category.model")
const User = require("../../models/user.model")
const customError = require("../../errors")

const createProjectCategory = async ({category, user}) => {
    const isUserValid = await User.findOne({_id: user})

	if(!isUserValid){
		throw new customError.NotFound(`User with id: ${user} not found`)
	}

    const projectCategory = await ProjectCategory.create({category, user})
    return projectCategory
}

const getAllProjectCategories = async () => {
    const projectCategories = await ProjectCategory.find({}).populate("projects")
    return projectCategories
}

const getProjectCategory = async (id) => {
    const projectCategory = await ProjectCategory.findOne({_id: id}).populate("projects")

    if (!projectCategory) {
        throw new customError.NotFound(`Project Category with id: ${id} not found`)
    }

    return projectCategory
}

const updateProjectCategory = async ({id, category, user}) => {
    let projectCategory = await ProjectCategory.findOne({_id: id})
    
    if (!projectCategory) {
        throw new customError.NotFound(`Project Category with id: ${id} not found`)
    }

    if(category){
        projectCategory.category = category
    }

    if(user){
        const isUserValid = await User.findOne({_id: user})

        if(!isUserValid){
            throw new customError.NotFound(`User with id: ${user} not found`)
        }

        projectCategory.user = user
    }

    await projectCategory.save()
    return projectCategory
}

const deleteProjectCategory = async (id) => {
    let projectCategory = await ProjectCategory.findOne({_id: id})

    if (!projectCategory) {
        throw new customError.NotFound(`Project Category with id: ${id} not found`)
    }

    projectCategory = await ProjectCategory.findOneAndRemove({_id: id})
    return projectCategory
}

module.exports = {
    createProjectCategory,
    getAllProjectCategories,
    getProjectCategory,
    updateProjectCategory,
    deleteProjectCategory
}
