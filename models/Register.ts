import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    course: String,
    gender: String,
    country: String,
  },
  { timestamps: true }
);

export default mongoose.models.Register ||
  mongoose.model("Register", RegisterSchema);