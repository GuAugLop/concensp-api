import mongoose from "mongoose";
const MONGO_CLUSTER = process.env.MONGO_CLUSTER!;

mongoose.connect(MONGO_CLUSTER);

export default mongoose;
