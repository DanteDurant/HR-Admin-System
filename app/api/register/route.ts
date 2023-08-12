import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const { name, surname, telephone, email, manager, status } = await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    // await User.create({ name, email, password: hashedPassword });
    await User.create({ name, surname, telephone, email, manager, status });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
