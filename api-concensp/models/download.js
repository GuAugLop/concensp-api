"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require("../config/mongo"));
const { Schema } = mongo_1.default;
const downloadSchema = new Schema({
    cnpj: String,
    nome: String,
    arquivo: String,
    cidade: String,
    estado: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Download = mongo_1.default.model("downloads", downloadSchema);
exports.default = Download;
