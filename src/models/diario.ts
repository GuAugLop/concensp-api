import mongoose from "../config/mongo";

const { Schema } = mongoose;

const diarioSchema = new Schema({
  nome: String,
  arquivo: String,
  data: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Diario = mongoose.model("diario", diarioSchema);
export default Diario;
