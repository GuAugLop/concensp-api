import express from "express";
import { AuthMiddleware } from "../middlewares";
import { DiarioModel } from "../models/index";
import upload from "../utils/upload";
const router = express.Router();

router.post(
  "/diario",
  AuthMiddleware,
  upload.single("arquivo"),
  async (req, res) => {
    try {
      const { nome, data } = req.body;
      const arquivo = req.file;
      if (!nome || !data || !arquivo) {
        return res.status(400).send({ msg: "", success: false });
      }

      const filePath =
        "https://www.api.concensp.com.br/arquivos/" + arquivo.filename;

      const newDiario = await DiarioModel.create({
        arquivo: filePath,
        nome,
        data,
      });
      return res.send({ newDiario });
    } catch (err) {
      res
        .status(500)
        .send({ err: "Algo de errado aconteceu, tente novamente mais tarde!" });
    }
  }
);

router.get("/diario", async (req, res) => {
  try {
    const diarios = await DiarioModel.find();
    return res.send({ data: diarios, success: true });
  } catch (err) {
    res
      .status(500)
      .send({ err: "Algo de errado aconteceu, tente novamente mais tarde!" });
  }
});

export default router;
