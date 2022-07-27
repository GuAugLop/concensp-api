import mongoose from "../config/mongo";

const { Schema } = mongoose;

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

const Download = mongoose.model("downloads", downloadSchema);
export default Download;
