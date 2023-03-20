const router = require("express").Router()

const { sendEmail } = require("../../controllers/contact.controllers")

router.route("/:username").post(sendEmail)

module.exports = router