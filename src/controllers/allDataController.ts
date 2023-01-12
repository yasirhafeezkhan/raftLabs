import csv from "csv-parser";
import fs from "fs";
const results: any = [];
export async function getAllBooksData() {
  try {
    fs.createReadStream("Books.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log("===CSV Books Data==", results);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function getAllMagazinesData() {
  try {
    fs.createReadStream("Magazines.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log("===CSV Magazines Data==", results);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function getAllAuthorsData() {
  try {
    fs.createReadStream("Authors.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log("===CSV Authors Data==", results);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}
