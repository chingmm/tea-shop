///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const commentSchema = new Schema({
  username: { type: String, required: true },
  comment: { type: String, required:true }
},
  { timestamps: true }
);

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Comment = model("comment", commentSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Comment;