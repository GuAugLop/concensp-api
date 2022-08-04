import mongoose from "../config/mongo";

const { Schema } = mongoose;

const licitacaoSchema = new Schema({
  titulo: String,
  objetivo: String,
  active: Boolean,
  numero: String,
  modalidade: String,
  data: String,
  arquivos: [
    {
      nome: String,
      envio: {
        type: Date,
        default: Date.now,
      },
      path: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Licitacao = mongoose.model("licitacoes", licitacaoSchema);
export default Licitacao;
