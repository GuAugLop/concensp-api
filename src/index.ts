import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./config/mongo";
import cors from "cors";
import bodyParser from "body-parser";
import {
  mailController,
  downloadsController,
  licitacaoController,
  diarioController,
} from "./controllers/index";
import jwt from "./utils/jwt";
const app = express();
const ADMIN_LOGIN = process.env.ADMIN_LOGIN!;
const ADMIN_PASS = process.env.ADMIN_PASS!;

const PORT = process.env.PORT || 8080;

app.use("/", express.static("api-concensp/public"));
app.use("/", express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Controllers
app.post("/login", (req, res) => {
  const { user, pass } = req.body;
  if (user !== ADMIN_LOGIN || pass !== ADMIN_PASS) {
    return res
      .status(401)
      .send({ success: false, err: "Invalid user or passowrd" });
  }
  const token = jwt.sign({ user: "José" });
  res.status(200).send({ token });
});
app.use("/", mailController);
app.use("/", downloadsController);
app.use("/", licitacaoController);
app.use("/", diarioController);

app.listen(PORT, () => {
  console.log("server is running in port: " + PORT);
});
