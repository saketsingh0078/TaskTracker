"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import dbConnect from "@/db/dbconnect";
import Task from "@/model/Task";

export async function createTask(
  title: string,
  description: string,
  status: string,
  priority: string
) {
  const session: any = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    return { success: false, message: "Unauthorized" };
  }

  await dbConnect();
  try {
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      user: session.user.id,
    });

    return { success: true, task: task.toObject() };
  } catch (error) {
    return { success: false, message: "Failed to create task" };
  }
}
