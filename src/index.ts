import express, { Request, Response } from "express";
import dotevn from "dotenv";
import bodyParser from "body-parser";
import allDataRoute from "./routes/allDataRoute";
import bookRoute from "./routes/bookRoute";
import magazineRoute from "./routes/magazineRoute";
import bookmagineRoute from "./routes/bookmagazineRoute";

//Configure
dotevn.config();
const app = express();
const PORT = process.env.PORT;

//=== Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//=== Checking Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Hi! Welcome to node project" });
});
//===Port Listen Route
app.listen(PORT, () => {
  console.log("===== Server Running on localhost:", PORT);
});

//===Api Route Starts
app.use("/api", allDataRoute);
app.use("/api", bookRoute);
app.use("/api", magazineRoute);
app.use("/api", bookmagineRoute);
