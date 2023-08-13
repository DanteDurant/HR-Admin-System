import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    await connectMongoDB();
    const users = await User.find({});

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while fetching users." },
      { status: 500 }
    );
  }
}