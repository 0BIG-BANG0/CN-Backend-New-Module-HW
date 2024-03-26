import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { ObjectId } from 'mongodb';

//creating model from schema

const BookModel = mongoose.model('Book', bookSchema)


export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        // try{
        //     // create instance from model
        //     const newBook = new BookModel(bookData);
            
        //     await newBook.save()
        //     console.log("Book created:", newBook);
        // }catch(err){
        //     console.error(err);
        //     throw err;
        // }
        try {
            const createdBook = await BookModel.create(bookData);
            return createdBook;
        } catch (error) {
            throw error;
        }
    }
    

    //filtering the book by id
    async getOne(id) {
        // try{
        //     console.log("Received ID:", id)
        //     return await BookModel.findOne(id)
        // }catch(err){
        //     console.error(err);
        //     throw err
        // }
        try {
            const book = await BookModel.findById(id);
            return book;
        } catch (error) {
            throw error;
        }
    }
}