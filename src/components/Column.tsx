// components/Column.tsx
import React from "react";
import Task from "./Task";

interface TaskTpe {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
}

interface ColumnProps {
  status: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const Column: React.FC<ColumnProps> = ({ status, tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{status}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Column;
