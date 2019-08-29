const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

let CustomerSchema = mongoose.Schema({
    firstName: {type: String, required},
    lastName: {type: String, required},
    phoneNumber: {type: String, required},
    email: {type: email, required},
    user: {type: ObjectId, ref: 'user'},
})
 
module.exports = mongoose.model("customer", customerSchema);
