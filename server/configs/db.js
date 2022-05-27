// const mongoose= require('mongoose')

// const connect=()=>{
//     mongoose.connect("mongodb+srv://babli:babli@1998@cluster0.dckkl.mongodb.net/mernEcommerce?retryWrites=true&w=majority")
// }
// module.exports= connect
const mongoose = require('mongoose');

module.exports = () => {
  
    return mongoose.connect("mongodb+srv://babli:babli123@cluster0.z3xll.mongodb.net/ecommerce?retryWrites=true&w=majority");
}
