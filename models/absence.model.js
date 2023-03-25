const mongoose = require('mongoose')
const { Schema } = mongoose

const absenceSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  course: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['justified', 'unjustified'], default: 'unjustified' }
})

module.exports = mongoose.model('Absence', absenceSchema)
