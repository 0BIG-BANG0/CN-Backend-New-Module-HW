import mongoose from "mongoose";
import BookRepository from "./book.repository.js";
import { ObjectId } from "mongodb";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //------change code in below functions only--------

  // creation of book
  createBook = async (req, res) => {
    // try {
    //   const { title, author, genre, copies, availableCopies } = req.body;

    //   console.log("Received Data:", req.body);

    //   if (!title || !author || !genre || !copies || !availableCopies) {
    //     return res.status(404).json({ error: "All fields are required" });
    //   }

    //   await this.bookRepository.createBook(req.body);
    //   res.status(201).json(req.body);
    // } catch (err) {
    //   console.error(err);
    //   res.status(404).send("Not Found");
    // }
    try {
      const bookData = req.body;
      const createdBook = await this.bookRepository.createBook(bookData);
      res.status(201).json(createdBook);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
  }
  };

  // filtering of book by id
  getOne = async (req, res) => {
    // try {
    //   const bookId = req.body;
    //   console.log(bookId);
    //   const book = await this.bookRepository.getOne(bookId);

    //   if (!bookId) {
    //     res.status(404).send("Book not found");
    //   } else {
    //     res.status(200).json(book);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).send("Internal Server Error");
    // }
    // ChatGPT : No of Ways you can Extract Data : https://chat.openai.com/share/04e31627-3dd4-41d7-8145-d09cc3b2d0ed
    try {
      const bookId = req.params.bookId;
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
          res.status(404).json({ error: "Book not found" });
      } else {
          res.status(200).json(book);
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
  }
  };
}
