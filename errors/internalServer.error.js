const CustomAPIError = require('./api.error')
const { StatusCodes } = require('http-status-codes')

class InternalServerError extends CustomAPIError {
    constructor (message, isOperational = true, stack = '') {
        super(StatusCodes.UNAUTHORIZED, message, isOperational, stack)
    }
}

module.exports = InternalServerError
