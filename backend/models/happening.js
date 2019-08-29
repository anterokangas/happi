const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

 
let HappeningSchema = mongoose.Schema({
    title: String,
    activated: {type:Boolean, default: false},
    start: {type: Date, default: Date.now},
    end: {type: Date, default: Date.now},
    description: String,
    numberName: {type: String, default: ''},
    priceSumName: {type: String, default: ''},
    total: {type: String, default: 'total'},
    // parts: {type: [PartSchema], default: undefined},
    parts: [{type: ObjectId, ref: 'part'}],
});

module.exports = mongoose.model("happening", HappeningSchema);
