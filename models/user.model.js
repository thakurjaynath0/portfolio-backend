const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
	}

}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)