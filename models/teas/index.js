///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const teaSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: {type: Number, required: true },
  size: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true }
}
);



////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Tea = model("tea", teaSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Tea;
