const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

let ProductSchema = mongoose.Schema({
    id: ObjectId,
    name: String,
    type: String,
    value: {type: Number, min: 0, default: 0},
    required: {type: Boolean, default: false},
    // id: {type: String, default: ''},
    properties: {type: [String], default: undefined},
    initial: {type: String, default: ''},
    comment: {type: String, default: ''},
    // extra: {type: String, default: ''},
})
 
let PartSchema = mongoose.Schema({
    id: ObjectId,
    header: String,
    subtotal: {type: String, default: ""},
    products: {type: [ProductSchema], default: undefined},
    productids: [{type: ObjectId, ref: 'product'}],
})

let Schema = mongoose.Schema({
    title: String,
    id: ObjectId,
    activated: {type:Boolean, default: false},
    start: {type: Date, default: Date.now},
    end: {type: Date, default: Date.now},
    description: String,
    numberName: {type: String, default: ''},
    priceSumName: {type: String, default: ''},
    total: {type: String, default: ''},
    parts: {type: [PartSchema], default: undefined},
    partids: [{type: ObjectId, ref: 'part'}],
});

module.exports = mongoose.model("fullHappening", Schema);