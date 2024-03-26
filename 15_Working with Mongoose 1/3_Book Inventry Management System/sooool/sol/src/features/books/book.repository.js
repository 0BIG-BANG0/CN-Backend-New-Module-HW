// -------------pre-written code starts---------------
import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

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
        console.log("genre",genre)
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
       try{
        const book= await booksModel.findById(bookId);
        if (!book) {
            return null; 
          }
        const qnt=book.availableCopies+quantity;
        book.availableCopies=qnt;
        const savedBook = await book.save();
        return savedBook;
       }catch(err){
        return err;
       }
    }


    //deletion of book
    async deleteBookById(bookId) {
        try {
          const deletedBook = await booksModel.findByIdAndDelete(bookId);
          return deletedBook; // Return the deleted book
        } catch (err) {
          return err;
        }
    }
}
