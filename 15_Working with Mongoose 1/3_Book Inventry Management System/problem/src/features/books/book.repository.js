// -------------pre-written code starts---------------
import mongoose from "mongoose";
import { bookSchema } from "./book.schema.js";

// creating model from schema.
const booksModel = mongoose.model("Book", bookSchema);

export default class BookRepository {
  //book creation
  async createBook(bookData) {
    const book = new booksModel(bookData);
    const savedBook = await book.save();
    return savedBook;
  }

  // filtering of book by id
  async getOne(id) {
    const book = await booksModel.findById(id);
    return book;
  }

  // ------------prewritten code ends----------------

  // Complete the following functions:

  //filtering the books based on genre
  async listBooksByGenre(genre) {
    // console.log("genre",genre)
    try {
      const books = await booksModel.find({ genre });

      if (!books || books.length === 0) {
        // If no books are found, return an empty array
        return [];
      }

      return books;
    } catch (err) {
      // Handle the error and return an error object or message
      return err;
    }
  }

  //increasing the count of available books
  async updateBookAvailability(bookId, quantity) {
    //console.log("Attempting to update book with ID:", bookId);
    try {
      const objectId = new mongoose.Types.ObjectId(bookId);
      if (!book) {
        return null;
      }
      // console.log("Parsed ObjectId:", objectId);

      const book = await booksModel.findByIdAndUpdate(
        objectId,
        { $inc: { availableCopies: quantity.quantity } },
        { new: true } // Return the updated document
      );
      // console.log("Updated book:", book);

      return book;
    } catch (err) {
      // console.error("Error updating book:", error);
      // throw error;
      return err;
    }
  }

  //deletion of book
  async deleteBookById(bookId) {
    try {
      const book = await booksModel.findByIdAndDelete(bookId);
      return book;
    } catch (err) {
      return err;
    }
  }
}

//  //increasing the count of available books
/* I apologize for any confusion. The use of quantity.quantity is specific to your previous code where the payload was structured as an object { quantity: 100 }. If you're sending a JSON payload like this:

json
Copy code
{
  "quantity": 100
}
Then, in your server-side code, you access the numeric value using quantity.quantity. However, based on your recent message, it seems you are sending only the numeric value directly without an additional object. In that case, you can adjust your server-side code to directly use the quantity value:

javascript
Copy code
// Update the function in your repository
async updateBookAvailability(bookId, quantity) { 
    console.log("Attempting to update book with ID:", bookId);
    try {
        const updatedBook = await booksModel.findByIdAndUpdate(
            new mongoose.Types.ObjectId(bookId),
            { $inc: { availableCopies: quantity }},
            { new: true }
        );
        console.log("Updated book:", updatedBook);
        return updatedBook;
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
}
This change assumes that your client-side request now sends only the numeric value without wrapping it in an object. If your request payload structure is simply:

json
Copy code
100
Then, you can use the direct quantity without the need for quantity.quantity. I appreciate your patience, and I hope this clarifies the issue. Adjust your client-side code accordingly based on the payload structure you are sending.





*/
