import dbConnect from "@/db/dbconnect";
import { authOptions } from "@/lib/authOptions";
import User from "@/model/User";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest) {
  const session: any = await getServerSession(authOptions);
  console.log("Session: ", session);

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const user = await User.findById(session.user.id);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ msg: "Unable to create user" }, { status: 400 });
  }
}
