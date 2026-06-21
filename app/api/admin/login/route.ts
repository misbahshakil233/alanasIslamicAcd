export const runtime = "nodejs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";

export async function POST(req: Request) {
  await dbConnect();

  const { email, password } = await req.json();

  const admin = await Admin.findOne({ email, password });

  if (!admin) {
    return NextResponse.json({ error: "Invalid" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: admin._id },
    "secret_key",
    { expiresIn: "1d" }
  );

  const res = NextResponse.json({ message: "Login success" });

  res.cookies.set("adminToken", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}