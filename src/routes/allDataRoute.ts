import express from "express";
import {
  getAllBooksData,
  getAllMagazinesData,
  getAllAuthorsData,
} from "../controllers/allDataController";
const route = express();

//Get all books data
route.get("/booksdata", getAllBooksData);

//Get all magazine data
route.get("/magazinesdata", getAllMagazinesData);

//Get all Authors data
route.get("/authorsdata", getAllAuthorsData);

export default route;
