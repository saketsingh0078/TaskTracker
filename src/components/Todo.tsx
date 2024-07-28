import React from "react";
import TodoTitle from "./TodoTitle";

export const Todo = () => {
  return (
    <div>
      <div className="flex gap-[20px]">
        <TodoTitle title="To do" />

        <TodoTitle title="In Progress" />
        <TodoTitle title="Under Review" />
        <TodoTitle title="Finished" />
      </div>
    </div>
  );
};
