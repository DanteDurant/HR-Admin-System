import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    console.log("Checking existence for email:", email);  // Log the email being checked

    const user = await User.findOne({ email }).select("_id");
    console.log("User found:", user);  // Log the user if found

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error in /api/userExists:", error.message);
    return NextResponse.json(  // Return a proper error response
      { message: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
