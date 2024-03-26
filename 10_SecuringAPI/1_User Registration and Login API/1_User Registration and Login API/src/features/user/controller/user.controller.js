// Please don't change the pre-written code
// Import the necessary modules here
import { addUser,confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Extracting user data from the request body
  const userData = req.body;

  // Checking if userData is truthy (i.e., not null or undefined)
  if (userData) {
    // Calling the addUser function to add a new user with the provided data
    let user = addUser(userData);

    // Sending a JSON response with a success status and the user data
    res.status(201).json({ status: "success", user });
  } else {
    // If userData is falsy, sending a JSON response with a failure status and a message
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  // Write your code here
  let status = confirmLogin(req.body);
  if (status) {
    res.status(200).json({ status: "success", msg: "login successful" });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
