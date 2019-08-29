const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


let PartSchema = mongoose.Schema({
    _happening: {type: ObjectId, ref: 'happening'},
    header: String,
    subtotal: {type: String, default: "subtotal"},
    products: [{type: ObjectId, ref: 'product'}],
})

module.exports = mongoose.model("part", PartSchema);
