//-----------pre-written code starts----------
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //book creation
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const bookData = {
        title,
        author,
        genre,
        copies,
        availableCopies,
      };
      await this.bookRepository.createBook(bookData);
      res.status(201).json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create a new book" });
    }
  };

  //filtering the book by id
  getOne = async (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //---------------pre-written code ends-----------------

  // Complete the functions below:

  //filtering the books based on genre
  listBooksByGenre = async (req, res) => {
    const genre = req.params.genre;
    // console.log(userGenre);
    try {
      const book = await this.bookRepository.listBooksByGenre(genre);
      if (!books || books.length === 0) {
        // Check if the result is empty and return a 404 response
        res.status(404).send("Books not found for this genre.");
      } else {
        res.status(200).json(books);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book by genre" });
    }
  };

  //increasing the count of available books
  updateBookAvailability = async (req, res) => {
    try {
    const bookId = req.params.bookId;
    const {quantity} = req.body;
    // console.log(bookId);
      const book = await this.bookRepository.updateBookAvailability(bookId,quantity);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //deletion of book
  deleteBook = async (req, res) => {
    const bookId = req.params.bookId;
    // console.log(bookId);
    try {
      const book = await this.bookRepository.deleteBookById(bookId);
      
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).json({message: "Book Deleted Successfully"});
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }

  };
}
