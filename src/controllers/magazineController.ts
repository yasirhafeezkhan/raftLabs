import csv from "csv-parser";
import fs from "fs";
import { Request } from "express";
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const results: any = [];
export async function getMagazines() {
  try {
    fs.createReadStream("Magazines.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log(
          "===CSV Magazines==",
          results.map((r: any) => r.title)
        );
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function getMagazineByIsbn(req: Request) {
  try {
    let isbn: string = req.params.isbn;
    fs.createReadStream("Magazines.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const magazine = results.find((result: any) => result.isbn === isbn);
        console.log("===CSV Magazine By ISBN==", magazine);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function getMagazinesByEmail(req: Request) {
  try {
    let email: string = req.params.email;
    fs.createReadStream("Magazines.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const magazines = results.filter(
          (result: any) => result.authors === email
        );
        console.log("===CSV magazines by author's email===", magazines);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function addMagazine() {
  // let path = __dirname + "/newBook.csv";
  let path = process.cwd();
  const csvWriter = createCsvWriter({
    path: path + "/newMagazine.csv",
    header: [
      { id: "title", title: "title" },
      { id: "isbn", title: "isbn" },
      { id: "authors", title: "authors" },
      { id: "publishedAt", title: "publishedAt" },
    ],
  });

  const records = [
    {
      title: "The Line Of Beauty",
      isbn: "123-456-789",
      authors: "Alan-Hollinghurst@gmail.com",
      publishedAt: "12-1-2023",
    },
  ];

  csvWriter
    .writeRecords(records) // returns a promise
    .then(() => {
      console.log("...Done");
    });
}
