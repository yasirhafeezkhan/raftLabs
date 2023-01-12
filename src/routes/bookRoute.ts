import express from "express";
import {
  getBooks,
  getBookByIsbn,
  getBooksByEmail,
  addBook,
} from "../controllers/bookController";
const route = express();

//Get books
route.get("/books", getBooks);

//Get book by isbn
route.get("/book/:isbn", getBookByIsbn);

//Get books by authors email
route.get("/books/:email", getBooksByEmail);

//Create book csv file
route.post("/book", addBook);

export default route;
