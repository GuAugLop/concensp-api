import express from "express";
import { DownloadModel } from "../models";
const router = express.Router();

router.post("/requestDownload", async (req, res) => {
  try {
    const { cnpj, nome, arquivo, cidade, estado, email } = req.body;
    if (!cnpj || !nome || !cidade || !estado || !email) {
      return res.status(403).send({ msg: "Preencha todos os campos" });
    }

    if (!arquivo) {
      return res.status(403).send({ msg: "Arquivo inválido" });
    }

    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
      return res.status(403).send({ msg: "CNPJ inválido" });
    }

    DownloadModel.create({
      cnpj,
      nome,
      arquivo,
      cidade,
      estado,
      email,
    });
    res.status(200).send({ msg: "ok", success: true });
  } catch (err: any) {
    return res.status(500).send({ msg: "", success: false });
  }
});

router.get("/allDownloads", async (req, res) => {
  try {
    const downloads = await DownloadModel.find();
    res.status(200).send({ mds: "ok", success: true, data: downloads });
  } catch (err: any) {
    return res.status(500).send({ msg: "", success: false });
  }
});

router.get("/deleteTeste", async (req, res) => {
  await DownloadModel.deleteMany({ cnpj: "00.529.815/0001-62" });
  return res.send({ success: true });
});

export default router;
