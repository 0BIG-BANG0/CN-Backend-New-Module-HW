// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here

    const productModel = new ProductModel(); // Create an instance of ProductModel. This instance is used to interact with the methods and properties of the ProductModel class.

    const products = productModel.fetchProducts(); // Fetch products. This line calls the fetchProducts method on the productModel instance, which, in turn, fetches the products (likely an array of products) from a data source. The fetched products are stored in the products variable.

    res.render("product", { products }); // Pass the fetched products to the render function.This line renders a view named "product" (assuming it's an EJS template) and passes the fetched products as data to be used within the view. The second argument to res.render is an object containing the data to be passed to the view.
  };
}
