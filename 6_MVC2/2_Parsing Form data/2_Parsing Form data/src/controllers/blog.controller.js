// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";


export const renderBlogs = (req,res) => {
  // Write your code here
  return res.render("blogs",{blogs});
};
export const renderBlogForm = (req,res) => {
  // Write your code here
  return res.render("addBlogForm",{blogs})
};
export const addBlog = (req,res) => {
  // Write your code here
  let newBlog = req.body;// Assuming the form data is in the request body
  blogs.push(newBlog);
  res.redirect('/');// Redirect to the blogs page after adding a new blog
};
