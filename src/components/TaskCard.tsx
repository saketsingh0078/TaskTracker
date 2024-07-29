import { IoTimeOutline } from "react-icons/io5";
import { Shimmer } from "./Shimmer";

export const TaskCard = ({
  title,
  description,
  index,
  setActiveTask,
  priority,
}: any) => {
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "bg-[#FF6B6B]";
      case "Medium":
        return "bg-[#FFA235]";
      case "Low":
        return "bg-[#0ECC5A]";
    }
  };

  return (
    <>
      {title == null ? (
        <Shimmer />
      ) : (
        <div
          className="w-[280px]  flex flex-col gap-[16px] px-[14px] py-[13px] rounded-[8px] border-[1px] border-[#DEDEDE] active:opacity-75 active:border-black cursor-pointer"
          draggable
          onDrag={() => setActiveTask(index)}
          onDragEnd={() => setActiveTask(false)}
        >
          <div className="flex flex-col gap-[13px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className="text-[#606060] font-inter font-[500] text-[16px] leading-[19.36px]">
                {title}
              </h1>
              <h2 className="font-inter font-normal text-[14px] leading-[16.94px] text-[#797979]">
                {description}
              </h2>
            </div>

            <h3
              className={`w-[55px] ${getPriorityClass(
                priority
              )} px-[6px] py-[8px] text-[12px] font-inter leading-[14.52px] text-[#FFFFFF] rounded-[8px] text-center`}
            >
              {priority}
            </h3>

            <div className="flex gap-[8px] items-center text-[#606060]">
              <IoTimeOutline className="w-[24px] h-[24px] " />
              <h1 className="font-inter font-semibold text-[14px] leading-[16.94px]">
                2024-08-15
              </h1>
            </div>

            <h1 className="font-inter font-[500] text-[14px] leading-[16.94px] text-[#797979]">
              1 hr ago
            </h1>
          </div>
        </div>
      )}
    </>
  );
};
