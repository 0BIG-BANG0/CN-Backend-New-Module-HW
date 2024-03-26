// make the necessary imports here
// implement the below schema
import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  username: String,
  text: String,
  room: Number,
  timestamp: Date,
});

export const chatModel = mongoose.model("messages", messageSchema);
