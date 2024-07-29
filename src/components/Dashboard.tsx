"use client";

import { useEffect, useState } from "react";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";
import { TaskAddMenu } from "./TaskAddMenu";
import axios from "axios";
import { useRouter } from "next/navigation";
import { updateTask } from "@/lib/actions/updateTask";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  const session: any = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const onDrop = async (status: string, position: number) => {
    if (activeTask == null || activeTask == undefined) return;

    const taskToMove: any = tasks[activeTask];

    try {
      const result = await updateTask(
        taskToMove._id,
        taskToMove.title,
        taskToMove.description,
        status,
        taskToMove.priority
      );

      if (!result.success) {
        console.error("Error updating task:", result.message);
      } else {
        console.log(result.data);
      }
    } catch (error: any) {
      console.error("Error updating task:", error);
    }

    getData();
  };

  const getData = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data.tasks);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get("/user");
    setUser(res.data.name);
  };

  if (session.status == "unauthenticated") {
    router.push("/signin");
  }

  return (
    <>
      <div className="h-screen  flex">
        <Sidebar setVisibleMenu={setVisibleMenu} user={user} />
        <Main
          setVisibleMenu={setVisibleMenu}
          setActiveTask={setActiveTask}
          onDrop={onDrop}
          tasks={tasks}
          user={user}
          loading={loading}
          setStatus={setStatus}
        />

        {visibleMenu ? (
          <div className="fixed top-0 right-0">
            <TaskAddMenu
              setVisibleMenu={setVisibleMenu}
              getData={getData}
              status={status}
              setStatus={setStatus}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dashboard;
