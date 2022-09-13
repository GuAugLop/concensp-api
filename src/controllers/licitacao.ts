import express from "express";
import { LicitacaoModel } from "../models/index";
import fs from "fs";
const router = express.Router();

router.get("/licitacoes", async (req, res) => {
  const licitacoes = await LicitacaoModel.find();
  return res.status(200).send({ msg: "ok", success: true, data: licitacoes });
});

router.post("/licitacoes", (req, res) => {
  const { titulo, objetivo, numero, modalidade, data } = req.body;
});

router.post("/arquivos", async (req, res) => {
  const files = req.files as any;
  console.log("abc");
  fs.writeFile(
    `public/arquivos/${files.teste.name.split(".")[0]}-${Date.now()}.pdf`,
    files.teste.data,
    (err) => {
      if (err) {
        return res
          .status(500)
          .send({ msg: "Falha ao salvar o arquivo", success: false });
      }
      return res.status(201).send({
        msg: "Arquivo salvo com sucesso",
        success: true,
      });
    }
  );
});

export default router;
