const router = require("express").Router()

const { createProjectCategory, getAllProjectCategories, getProjectCategory, updateProjectCategory, deleteSkillCategory } = require("../../controllers/category/project.category.controller")
const validate = require("../../middlewares/validate")
const {projectCategoryValidations} = require("../../validations")

router.route("/").get(getAllProjectCategories).post([validate(projectCategoryValidations.createProjectCategory)], createProjectCategory)
router.route("/:id").get(getProjectCategory).patch([validate(projectCategoryValidations.updateProjectCategory)], updateProjectCategory).delete(deleteSkillCategory)

module.exports = router