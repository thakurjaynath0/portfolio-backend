const router = require("express").Router()

const {createSocialMedia, getAllSocialMedia, getSingleSocialMedia, updateSocialMedia,  deleteSocialMedia} = require("../../controllers/socialMedias.controllers")
const validate = require("../../middlewares/validate")
const {socialMediasValidations} = require("../../validations")

router.route("/").get(getAllSocialMedia).post([validate(socialMediasValidations.createSocialMedias)], createSocialMedia)
router.route("/:id").get(getSingleSocialMedia).patch([validate(socialMediasValidations.updateSocialMedias)], updateSocialMedia).delete(deleteSocialMedia)

module.exports = router

