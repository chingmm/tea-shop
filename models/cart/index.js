///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const cartSchema = new Schema({
  tea: { type: String, required: true },
  qty: { type: Number, required:true },
  username: { type: String, required: true },
},
  { timestamps: true }
);

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Cart = model("cart", cartSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Cart;
