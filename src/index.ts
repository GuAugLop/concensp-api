import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import { mailController, downloadsController } from "./controllers/index";
import "./config/mongo";
const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Controllers
app.use("/", mailController);
app.use("/", downloadsController);

app.listen(PORT, () => {
  console.log("server is running in port: " + PORT);
});
