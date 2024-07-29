"use client";

import { FeatureButton } from "./FeatureButton";
import { Hero } from "./Hero";
import { Title } from "./Title";
import { Todo } from "./Todo";

export const Main = ({
  setVisibleMenu,
  setActiveTask,
  onDrop,
  tasks,
  setStatus,
  user,
  loading,
}: any) => {
  return (
    <div className="w-full pt-[24px] pl-[16px] pr-[32px] bg-[#F7F7F7] ">
      <Title user={user} />
      <Hero />
      <FeatureButton setVisibleMenu={setVisibleMenu} />
      <Todo
        setVisibleMenu={setVisibleMenu}
        setActiveTask={setActiveTask}
        onDrop={onDrop}
        tasks={tasks}
        setStatus={setStatus}
        loading={loading}
      />
    </div>
  );
};
