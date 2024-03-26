// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  // Write your code here
  const { name,email,password} = data;
  const newUser = new UserSchema(name,email,password);
  users.push(newUser);
  return newUser;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  // Destructuring the email and password from the data object
  const { email, password } = data;

  // Initializing a variable to track whether the login is valid
  let isValid = false;

  // Iterating over the users array to find a matching user
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      // If a matching user is found, set isValid to true
      isValid = true;
    }
  });

  // Returning the final result indicating whether the login is valid
  return isValid;
};


export const getAllUsers = () => {
  return users;
};
