const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const serviceSchema = new mongoose.Schema({
  car_id: ObjectId,
  name: String,
  date: String
})

module.exports = mongoose.model('Service', serviceSchema)
