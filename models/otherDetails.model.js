const mongoose = require("mongoose")
const validator = require("validator")

const OtherDetailsSchema = mongoose.Schema({
	tagline: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: validator.isEmail,
			message: 'Please provide valid email',
		},
	},
	description: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	contact: {
		type: String,
		required: true
	},
	from: {
		type: String,
		requied: true
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true
	}
})

module.exports = mongoose.model("OtherDetails", OtherDetailsSchema)