import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";

export const FeatureButton = () => {
  return (
    <div className="flex h-[40px] items-center justify-between">
      <div className=" flex items-center bg-white w-[196px] p-[8px] border-[1px] rounded-[8px] justify-between text-[#797979]">
        <input
          className="w-[140px] h-[19px] font-inter font-normal text-[16px] leading-[19.36px] outline-none"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="w-[16px] h-[16px]" />
      </div>

      <div className="flex gap-[16px] ">
        <div className="flex gap-[14px]">
          <div className="flex items-center  gap-[14px] text-[#797979] p-[8px] rounded-[4px] bg-[#F4F4F4]">
            <h1 className="font-normal font-inter text-[16px] leading-[19.36px]">
              Calender view
            </h1>
            <CiCalendar className="w-[24px] h-[24px]" />
          </div>
          <div className="flex items-center  gap-[14px] text-[#797979] p-[8px] rounded-[4px] bg-[#F4F4F4]">
            <h1 className="font-normal font-inter text-[16px] leading-[19.36px]">
              Automation
            </h1>
            <BsStars className="w-[24px] h-[24px]" />
          </div>
          <div className="flex items-center  gap-[14px] text-[#797979] p-[8px] rounded-[4px] bg-[#F4F4F4]">
            <h1 className="font-normal font-inter text-[16px] leading-[19.36px]">
              Filter
            </h1>
            <CiFilter className="w-[24px] h-[24px]" />
          </div>
          <div className="flex items-center  gap-[14px] text-[#797979] p-[8px] rounded-[4px] bg-[#F4F4F4]">
            <h1 className="font-normal font-inter text-[16px] leading-[19.36px]">
              Share
            </h1>
            <IoShareSocialOutline className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div
          className="flex items-center bg-[#4C38C2] rounded-[8px] 
        p-[8px] gap-[8px]"
        >
          <button className="text-[#FFFFFF] font-[500] text-[16px] font-inter leading-[19.36px]">
            Create new
          </button>
          <IoAddCircleSharp className="w-[24px] h-[24px] text-white" />
        </div>
      </div>
    </div>
  );
};
