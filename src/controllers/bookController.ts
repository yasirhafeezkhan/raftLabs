import csv from "csv-parser";
import fs from "fs";
import { Request } from "express";
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const results: any = [];
export async function getBooks() {
  try {
    fs.createReadStream("Books.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log(
          "===CSV Books==",
          results.map((r: any) => r.title)
        );
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function getBookByIsbn(req: Request) {
  try {
    let isbn: string = req.params.isbn;
    fs.createReadStream("Books.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const book = results.find((result: any) => result.isbn === isbn);
        console.log("===CSV Book By ISBN==", book);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function getBooksByEmail(req: Request) {
  try {
    let email: string = req.params.email;
    fs.createReadStream("Books.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const books = results.filter((result: any) => result.authors === email);
        console.log("===CSV books by author's email===", books);
      });
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}

export async function addBook() {
  // let path = __dirname + "/newBook.csv";
  let path = process.cwd();
  const csvWriter = createCsvWriter({
    path: path + "/newBook.csv",
    header: [
      { id: "title", title: "title" },
      { id: "isbn", title: "isbn" },
      { id: "authors", title: "authors" },
      { id: "description", title: "description" },
    ],
  });

  const records = [
    {
      title: "The Line Of Beauty",
      isbn: "123-456-789",
      authors: "Alan-Hollinghurst@gmail.com",
      description:
        "This Booker Prize-winning novel bottles the essence of the 1980s, as the story follows a quest for beauty against a backdrop of politics, greed and friendships turned toxic.",
    },
  ];

  csvWriter
    .writeRecords(records) // returns a promise
    .then(() => {
      console.log("...Done");
    });
}
