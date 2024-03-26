// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import {userSchema} from "./user.schema.js"

const UserModel = mongoose.model("User", userSchema);

export const userRegisterationRepo = async (userData) => {
  // Write your code here
  try{
    const newUser = new UserModel(userData)
    await newUser.save();
      return newUser;
  }catch(err){
    console.log(err)
  }
};
export const userLoginRepo = async (userData) => {
  // Write your code here
  try {
    //create instance of model
    const newUser = new UserModel(userData);
    await newUser.save();
    return newUser;
    
  } catch (err) {
    console.log(err);
    if (err instanceof mongoose.Error.ValidationError) {
      throw err;
    } else {
      console.log(err);
      throw err;
    }
  }
};

export const updateUserPasswordRepo = async (_id, newpassword, next) => {
  // Write your code here
  try {
    let user = await UserModel.findById(_id); //we found the user now update the password
    if (user) {
      user.password = newpassword;
      user.save();
    } else {
      throw new Error("No Such User Found");
    }
  } catch (err) {
    console.log(err);
    throw err;
    next()
  }
};
