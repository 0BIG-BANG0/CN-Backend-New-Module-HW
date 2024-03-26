// Import the necessary modules here
import mongoose from "mongoose";

// Start creating your user schema here

export const userSchema = new mongoose.Schema({
  name: { type: String , required:true, minLength: 3 },
  email: {type: String, unique: true, required: true, match: [/.+\@.+\../, "Please enter a valid Email"]},
  mobile: { type: String , unique:true},
  age: { type: Number, required:true, min:0,max:100},
  password: {type: String},
  type:{enum:['student' ,'fresher' ,'experienced']}
});
