// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser = (req, res) => {
  //Extract data from the form submission
  

  //Update the user array with new data
  updateUsers(req.body);
  // Render the update-form view with the updated user data
  res.render("update-form", { user: req.body });
};
