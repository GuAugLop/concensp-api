import express from "express";
import { DownloadModel } from "../models";
const router = express.Router();

router.post("/requestDownload", async (req, res) => {
  try {
    const { cnpj, nome, arquivo, cidade, estado } = req.body;
    if (!cnpj || !nome || !cidade || !estado) {
      return res.status(403).send({ msg: "Preencha todos os campos" });
    }

    if (!arquivo) {
      return res.status(403).send({ msg: "Arquivo inválido" });
    }

    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
      return res.status(403).send({ msg: "CNPJ inválido" });
    }

    const download = await DownloadModel.create({
      cnpj,
      nome,
      arquivo,
      cidade,
      estado,
    });
    if (download) {
      return res.status(200).send({ msg: "ok", success: true, item: download });
    }
  } catch (err: any) {
    return res.status(500).send({ msg: "", success: false });
  }
});

export default router;
