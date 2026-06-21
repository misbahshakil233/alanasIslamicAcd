import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Register from "@/models/Register";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const user = await Register.create(body);

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}