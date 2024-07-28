// components/Board.tsx
import React, { useState, useEffect } from "react";
import Column from "./Column";
import TaskForm from "./TaskForm";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import axios from "axios";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
}

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3001/tasks");
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const addTask = async (task: Task) => {
    const response = await axios.post("http://localhost:3001/tasks", task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (updatedTask: Task) => {
    const response = await axios.put(
      `http://localhost:3001/tasks/${updatedTask.id}`,
      updatedTask
    );
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? response.data : task))
    );
  };

  const deleteTask = async (id: string) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === result.draggableId) {
          return { ...task, status: destination.droppableId };
        }
        return task;
      });
      setTasks(updatedTasks);

      const movedTask = tasks.find((task) => task.id === result.draggableId);
      if (movedTask) {
        await axios.put(`http://localhost:3001/tasks/${movedTask.id}`, {
          ...movedTask,
          status: destination.droppableId,
        });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TaskForm onSave={addTask} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {["To Do", "In Progress", "Done"].map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
            onEdit={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
