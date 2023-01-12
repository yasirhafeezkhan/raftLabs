import csv from "csv-parser";
import fs from "fs";

let result: any = [];

export async function getBookMagazine() {
  try {
    let filenames: string[] = ["Books.csv", "Magazines.csv"];
    for (let i = 0; i < filenames.length; i++) {
      let currFilePath = filenames[i];
      fs.createReadStream(currFilePath)
        .pipe(csv())
        .on("data", (data) => result.push(data))
        .on("end", () => {
          let sortedResult = result.sort((r1: any, r2: any) =>
            r1.title > r2.title ? 1 : -1
          );
          console.log("===Sorted books and magazines===", sortedResult);
        });
    }
  } catch (error) {
    console.log("===something went wrong==", error);
  }
}
