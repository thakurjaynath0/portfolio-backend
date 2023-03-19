const mongoose = require('mongoose')

const connectDB = (url, options) => {
    mongoose.set("strictQuery", true)
    return mongoose.connect(url, options)
}

module.exports = connectDB
