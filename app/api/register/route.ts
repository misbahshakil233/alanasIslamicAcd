import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Register from "@/models/Register";

export async function POST(req: Request) {
  try {
  await connectDB();
  console.log("Database connected successfully");

  const body = await req.json();

  const user = await Register.create(body);

  return NextResponse.json({
    success: true,
    data: user,
  });
} catch (error) {
  console.error("FULL ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      error: String(error),
    },
    { status: 500 }
  );
}
}