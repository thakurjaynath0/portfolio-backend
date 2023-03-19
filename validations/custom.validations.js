const password = (value, helpers) => {
	if (value.length < 8) {
		return helpers.message("Password must be at least 8 characters")
	}
	if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
		return helpers.message("Password must contain at least 1 number and 1 letter .")
	}
	return value
}

const objectId = (value, helpers) => {
	if (!value.match(/^[0-9a-fA-F]{24}$/)) {
		return helpers.message("\"{{#label}}\" must be a valid mongo id .")
	}
	return value
}

const phone = (value, helpers) => {
	if(value.length !== 10){
		return helpers.message("phone_invalid_length")
	}
	if(!value.match(/^[0-9]{10}$/)){
		return helpers.message("phone_invalid_format")
	}
	return value
}

const email = (value, helpers) => {
	if(!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}/)){
		return helpers.message("invalid_email_format")
	}

	return value
}

module.exports = {
	password,	
	objectId,
	phone,
	email
}