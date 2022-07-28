"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const router = express_1.default.Router();
router.post("/requestDownload", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        models_1.DownloadModel.create({
            cnpj,
            nome,
            arquivo,
            cidade,
            estado,
        });
        res.status(200).send({ msg: "ok", success: true });
    }
    catch (err) {
        return res.status(500).send({ msg: "", success: false });
    }
}));
exports.default = router;
