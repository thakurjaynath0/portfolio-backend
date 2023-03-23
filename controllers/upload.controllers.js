const { StatusCodes } = require("http-status-codes")
const customError = require("../errors")

const uploadFile = async (req, res) => {
	if(!req.file){
		throw new customError.BadRequest("No file uploaded")
	}

	res.status(StatusCodes.OK).json({path: `/${req.file.path}`})
}

module.exports = {
	uploadFile
}