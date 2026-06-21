import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Register from "@/models/Register";

export async function GET() {
  try {
    await connectDB();

    const students = await Register.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      students,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error fetching students",
      },
      { status: 500 }
    );
  }
}