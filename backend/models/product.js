const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

let ProductSchema = mongoose.Schema({
    _part: {type: ObjectId, ref: 'part'},
    name: String,
    type: String,
    value: {type: Number, min: 0, default: 0},
    required: {type: Boolean, default: false},
    properties: {type: [String], default: undefined},
    initial: {type: String, default: ''},
    comment: {type: String, default: ''},
    // extra: {type: String, default: ''},
})
 
module.exports = mongoose.model("product", ProductSchema);
