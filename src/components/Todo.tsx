"use client";
import React, { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";

export const Todo = ({
  setVisibleMenu,
  setActiveTask,
  onDrop,
  tasks,
  setStatus,
  loading,
}: any) => {
  return (
    <div className=" bg-white h-fit p-2">
      <div className="flex gap-[20px] ">
        <TaskColumn
          tasks={tasks}
          status="To do"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
          setStatus={setStatus}
          setVisibleMenu={setVisibleMenu}
          loading={loading}
        />
        <TaskColumn
          tasks={tasks}
          status="In Progress"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
          setStatus={setStatus}
          setVisibleMenu={setVisibleMenu}
          loading={loading}
        />
        <TaskColumn
          tasks={tasks}
          status="Under Review"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
          setStatus={setStatus}
          setVisibleMenu={setVisibleMenu}
          loading={loading}
        />
        <TaskColumn
          tasks={tasks}
          status="Finished"
          setActiveTask={setActiveTask}
          onDrop={onDrop}
          setStatus={setStatus}
          setVisibleMenu={setVisibleMenu}
          loading={loading}
        />
      </div>
    </div>
  );
};
