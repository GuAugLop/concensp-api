import mongoose from "mongoose";
const MONGO_CLUSTER = process.env.MONGO_CLUSTER!;

mongoose.connect(MONGO_CLUSTER).catch((err: any) => {
  console.log({ err });
});

export default mongoose;
