import { formValidationMiddleware } from "./middleware.js"; 

export const newUser = (req, res) => {
  
  res.status(201).send("user added !");
};
// Add the formValidationMiddleware to the /new route
export const newUserWithValidation = [formValidationMiddleware, newUser];