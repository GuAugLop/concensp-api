import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import {
  mailController,
  downloadsController,
  licitacaoController,
} from "./controllers/index";
import "./config/mongo";
import fileUpload from "express-fileupload";
const app = express();

const PORT = process.env.PORT || 8080;

app.use(fileUpload());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/static", express.static("public"));

//Controllers
app.get("/", (req, res) => {
  res.status(200).send({ msg: "API Concensp" });
});
app.use("/", mailController);
app.use("/", downloadsController);
app.use("/", licitacaoController);

app.listen(PORT, () => {
  console.log("server is running in port: " + PORT);
});
