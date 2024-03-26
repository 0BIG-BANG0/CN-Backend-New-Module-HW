// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  //Validation code using express validator

  //1.Setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Image is required");
      }
      return true;
    }),
  ];

  //2.run those rules
  await Promise.all(rules.map((rule)=> rule.run(req))
  );

  //3. check if there are any errors after running the rules
  var validationErrors = validationResult(req)
    console.log(validationErrors)

    // 4. If there are errors then show them
  if (!validationErrors.isEmpty()) {
    return res.render("upload-form", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
};
export default formValidation;