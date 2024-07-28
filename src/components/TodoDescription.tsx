import { IoTimeOutline } from "react-icons/io5";
import React from "react";

const TodoDescription = () => {
  return (
    <div className="border-2 p-2 shadow-md">
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[#606060] font-inter font-[500] text-[16px] leading-[19.36px]">
          Implement User <br />
          Authentication
        </h1>
        <h2 className="font-inter font-normal text-[14px] leading-[16.94px] text-[#797979]">
          Develop and integrate user authentication using email and password
        </h2>

        <h3 className="bg-[#FF6B6B] w-[55px] h-[27px] px-[8px] py-[6px] text-[12px] font-inter leading-[14.52px] text-[#FFFFFF] rounded-[8px]">
          Urgent
        </h3>
      </div>
    </div>
  );
};

export default TodoDescription;
