const router = require("express").Router()

const {createSkillCategory, getAllSkillCategories, getSkillCategory, updateSkillCategory, deleteSkillCategory} = require("../../controllers/category/skills.category.controller")
const validate = require("../../middlewares/validate")
const {skillsCategoryValidations} = require("../../validations")

router.route("/").get(getAllSkillCategories).post([validate(skillsCategoryValidations.createSkillsCategory)], createSkillCategory)
router.route("/:id").get(getSkillCategory).patch([validate(skillsCategoryValidations.updateSkillsCategory)], updateSkillCategory).delete(deleteSkillCategory)

module.exports = router