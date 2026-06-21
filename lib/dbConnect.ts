import mongoose from "mongoose";

export default async function dbConnect() {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect("mongodb://localhost:27017/yourDB");
}