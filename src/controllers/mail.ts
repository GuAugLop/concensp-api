import express from "express";
import mail from "../utils/sendMail";
const router = express.Router();

router.post("/contact", (req, res) => {
  const { nome, sobrenome, estado, assunto, cidade, titulo, email, telefone } =
    req.body;
  mail
    .sendMail({ nome, sobrenome, estado, titulo, assunto, cidade, email, telefone })
    .then(() => {
      res.status(200).send({ msg: "Email Enviado" });
    })
    .catch(() => {
      res.status(500).send({ msg: "falha ao enviar o email" });
    });
});

export default router;
