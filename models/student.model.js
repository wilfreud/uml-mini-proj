const mongoose = require('mongoose')
const { Schema } = mongoose

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('Student', studentSchema)
