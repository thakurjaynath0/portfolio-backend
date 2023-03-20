/* eslint-disable no-undef */
const CustomError = require("../../errors")
const multer = require("multer")
const { checkFile } = require("./allowedFiles")

const storage = multer.diskStorage({
	destination: function (req, files, callBack) {
		callBack(null, "/uploads")
	},
	filename: function (req, files, callBack) {
		callBack(null, Date.now() + files.originalname)
	}
})

const upload = multer({
	storage,
	fileFilter: function (req, files, callBack) {
		try {
			checkFile(files.mimetype)
			callBack(null, true)
		} catch (err) {
			callBack(new CustomError.BadRequest(err.message), false)
		}
	}
})

module.exports = upload
