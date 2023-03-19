const router = require("express").Router()

const {createSkills, getAllSkills, getSingleSkills, updateSkills, deleteSkills} = require("../../controllers/Skills.controllers")
const validate = require("../../middlewares/validate")
const {skillsValidations} = require("../../validations")

router.route("/").get(getAllSkills).post([validate(skillsValidations.createSkills)], createSkills)
router.route("/:id").get(getSingleSkills).patch([validate(skillsValidations.updateSkills)], updateSkills).delete(deleteSkills)

module.exports = router