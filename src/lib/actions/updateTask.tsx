"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import dbConnect from "@/db/dbconnect";
import Task from "@/model/Task";

export async function updateTask(
  id: string,
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
    const updatedTask = await Task.updateOne(
      { _id: id },
      { title, description, status, priority }
    );

    if (!updatedTask) {
      return {
        success: false,
        message: "Task not found",
        task: {
          id,
          title,
          description,
          status,
          priority,
          session,
        },
      };
    }

    return { success: true, data: updatedTask };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
