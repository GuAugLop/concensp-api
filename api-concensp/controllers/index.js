"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadsController = exports.mailController = void 0;
const mail_1 = __importDefault(require("./mail"));
exports.mailController = mail_1.default;
const downloads_1 = __importDefault(require("./downloads"));
exports.downloadsController = downloads_1.default;
