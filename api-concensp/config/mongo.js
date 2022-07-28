"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
mongoose_1.default.connect(MONGO_CLUSTER).catch((err) => {
    console.log({ err });
});
exports.default = mongoose_1.default;
