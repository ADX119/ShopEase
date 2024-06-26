const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  contact : Number,
  picture : String
});
module.exports = mongoose.model("users", userSchemaSchema);