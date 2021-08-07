const mongoose = require('mongoose')

//create schema for authors
const authorSchema = new mongoose.Schema({
    //one column - name
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)