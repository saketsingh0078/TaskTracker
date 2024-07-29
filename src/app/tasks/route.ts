import dbConnect from "@/db/dbconnect";
import { authOptions } from "@/lib/authOptions";
import Task from "@/model/Task";
import User from "@/model/User";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session: any = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const userId = session.user.id;

  try {
    const tasks = await Task.find({ user: userId });
    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch tasks", session },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const session: any = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    await dbConnect();
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to connection  failed" },
      { status: 400 }
    );
  }

  try {
    const { title, description, status } = await req.json();
    const task = await Task.create({
      title,
      description,
      status,
      user: session.user.id,
    });
    return NextResponse.json({ success: true, task }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create task" },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const session: any = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await dbConnect();
  try {
    const { id, title, description, status, priority } = await req.json();

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, user: session.user.id },
      { title, description, status, priority },
      { new: true }
    );

    if (!updatedTask) {
      return NextResponse.json(
        { success: false, message: "Task not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, data: updatedTask },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const session: any = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await dbConnect();
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Task ID is required" },
        { status: 400 }
      );
    }
    const deletedTask = await Task.findOneAndDelete({
      _id: id,
      user: session.user.id,
    });
    if (!deletedTask) {
      return NextResponse.json(
        { success: false, message: "Task not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 400 }
    );
  }
}
