const router = require("express").Router()

const {uploadFile} = require("../../controllers/upload.controllers")
const upload = require("../../utils/fileupload/fileupload")

router.route("/").post([upload.single("file")], uploadFile)

module.exports = router