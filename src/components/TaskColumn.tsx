import { TaskCard } from "./TaskCard";
import { BiMenuAltRight } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import DropArea from "./DropArea";
import React from "react";
import { Shimmer } from "./Shimmer";

const TaskColumn = ({
  tasks,
  status,
  setActiveTask,
  onDrop,
  setStatus,
  setVisibleMenu,
  loading,
}: any) => {
  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="flex w-[280px] flex-col mb-4 text-[#555555 ] bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-[20px] font-inter leading-[24.2px]">
              {status}
            </h1>
            <BiMenuAltRight className="transform -rotate-180" />
          </div>
          <DropArea
            onDrop={async () => {
              onDrop(status, 0);
            }}
          />

          {tasks.map(
            (task: any, index: any) =>
              task.status === status && (
                <React.Fragment key={index}>
                  <TaskCard
                    key={index}
                    title={task.title}
                    description={task.description}
                    index={index}
                    priority={task.priority}
                    setActiveTask={setActiveTask}
                  />

                  <DropArea
                    onDrop={async () => {
                      onDrop(status, index + 1);
                    }}
                  />
                </React.Fragment>
              )
          )}

          <div
            className="flex justify-between sw-[256.75px] h-[40px] p-[8px] rounded-[8px] bg-[#3A3A3A]  cursor-pointer"
            onClick={() => {
              setVisibleMenu(true);
              setStatus(status);
            }}
          >
            <button className="text-[#E3E1E1] text-[16px] font-normal font-inter leading-[19.36px]">
              Add new
            </button>
            <IoAdd className="w-[24px] h-[24px] text-[#E3E1E1] " />
          </div>
        </div>
      )}
    </>
  );
};

export default TaskColumn;
