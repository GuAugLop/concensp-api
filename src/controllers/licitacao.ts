import express from "express";
import { LicitacaoModel } from "../models/index";
const router = express.Router();

router.get("/licitacoes", async (req, res) => {
  const licitacoes = await LicitacaoModel.find();
  return res.status(200).send({ mds: "ok", success: true, data: licitacoes });
});

router.post("/licitacoes", (req, res) => {
  const { titulo, objetivo, numero, modalidade, data } = req.body;
});

router.post("/arquivos", (req, res) => {});

export default router;
