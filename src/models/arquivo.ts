import mongoose from "../config/mongo";

const { Schema } = mongoose;

const arquivoSchema = new Schema({
  nome: String,
  path: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Arquivo = mongoose.model("arquivos", arquivoSchema);
export default Arquivo;
