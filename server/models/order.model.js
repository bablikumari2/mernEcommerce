const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

      title: { type: 'string', required: false ,unique:true },
      price: { type: 'Number', required: false },
      description: { type: 'string', required: false },
      category: { type: 'string', required: false },
      rating: { type: 'string', required: false },
      image: [String],
      qty: { type: Number, min: 1, max: 50, default: 1 }

}, {
      versionkey: false
})
module.exports = mongoose.model("order", orderSchema)