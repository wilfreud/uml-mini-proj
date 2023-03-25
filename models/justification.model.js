const mongoose = require('mongoose');
const { Schema } = mongoose;

const justificationSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  justificationUrl: { type: String, required: true },
  dates: [{ type: Date, required: true }]
});

module.exports = mongoose.model('Justification', justificationSchema);
