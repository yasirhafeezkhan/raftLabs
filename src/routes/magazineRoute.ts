import express from "express";
import {
  getMagazines,
  getMagazineByIsbn,
  getMagazinesByEmail,
  addMagazine,
} from "../controllers/magazineController";

const route = express();

//Get magazine
route.get("/magazines", getMagazines);

//Get magazine by isbn
route.get("/magazine/:isbn", getMagazineByIsbn);

//Get magazine by author email
route.get("/magazines/:email", getMagazinesByEmail);

//Add new magazine
route.post("/magazine", addMagazine);

export default route;
