import mongoose from "../config/mongo";

const { Schema } = mongoose;

const licitacaoSchema = new Schema({
  titulo: String,
  objetivo: String,
  active: {
    type: Boolean,
    default: false,
  },
  numero: String,
  modalidade: String,
  data: String,
  arquivos: [{ type: Schema.Types.ObjectId, ref: "arquivos" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Licitacao = mongoose.model("licitacoes", licitacaoSchema);
export default Licitacao;
