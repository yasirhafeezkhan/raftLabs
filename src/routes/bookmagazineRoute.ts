import express from "express";
import { getBookMagazine } from "../controllers/bookmagazineController";

const route = express();

//Get magazine
route.get("/book-magazine", getBookMagazine);

export default route;
