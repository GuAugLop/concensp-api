"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sendMail_1 = __importDefault(require("../utils/sendMail"));
const router = express_1.default.Router();
router.post("/contact", (req, res) => {
    const { nome, sobrenome, estado, assunto, cidade, titulo, email, telefone } = req.body;
    sendMail_1.default
        .sendMail({ nome, sobrenome, estado, titulo, assunto, cidade, email, telefone })
        .then(() => {
        res.status(200).send({ msg: "Email Enviado" });
    })
        .catch(() => {
        res.status(500).send({ msg: "falha ao enviar o email" });
    });
});
exports.default = router;
