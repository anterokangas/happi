const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    name: String,
    type: String,
    value: {type: Number, min: 0, default: 0},
    required: {type: Boolean, default: false},
    // id: {type: String, default: ''},
    // properties: {type: [String], default: undefined},
    // initial: {type: String, default: ''},
    // comment: {type: String, default: ''},
    // extra: {type: String, default: ''},
})
 
let PartSchema = mongoose.Schema({
    header: String,
    products: {type: [ProductSchema], default: undefined},
})

let Schema = mongoose.Schema({
    title: String,
    activated: {type:Boolean, default: false},
    start: {type: Date, default: Date.now},
    end: {type: Date, default: Date.now},
    description: String,
    subtotal: {type: String, default: ''},
    numberName: {type: String, default: ''},
    priceSumName: {type: String, default: ''},
    total: {type: String, default: ''},
    parts: {type: [PartSchema], default: undefined},
});

module.exports = mongoose.model("happening", Schema);