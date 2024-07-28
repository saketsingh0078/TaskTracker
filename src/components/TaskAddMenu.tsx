import { RxCross2 } from "react-icons/rx";
import { CiShare2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineOpenInFull } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { CiCalendar } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { IoAdd } from "react-icons/io5";

export const TaskAddMenu = () => {
  return (
    <div className="w-[622px] h-[100vh] pt-[16px] px-[27px] bg-[white]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex justify-between text-[#797979] ">
          <div className="flex  gap-[16px] items-center">
            <RxCross2 className="w-[24px] h-[24px]" />
            <MdOutlineOpenInFull className="w-[24px] h-[24px] rotate-90" />
          </div>
          <div className="flex gap-[14px] ">
            <div className="flex rounded-[4px] p-[8px] gap-[16px] bg-[#F4F4F4] items-center">
              <h1 className="font-inter font-normal text-[16px] leading-[19.36px] ">
                Share
              </h1>
              <CiShare2 className="w-[24px] h-[24px]" />
            </div>
            <div className="flex rounded-[4px] p-[8px] gap-[16px] bg-[#F4F4F4] items-center">
              <h1 className="font-inter font-normal text-[16px] leading-[19.36px]">
                Favourite
              </h1>
              <FaRegStar className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div className="w-[622px] h-[58px]">
            <input
              className="text-[48px] font-semibold font-barlow leading-[57.6px]"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col gap-[32px] justify-center">
            <div className="flex gap-[32px] items-center outline-none">
              <MdOutlineLightMode className="w-[24px] h-[24px] " />
              <h1>status</h1>
              <input type="text" placeholder="Not selected" />
            </div>
            <div className="flex gap-[32px] items-center outline-none">
              <FcHighPriority className="w-[24px] h-[24px] " />
              <h1>status</h1>
              <input type="text" placeholder="Not selected" />
            </div>
            <div className="flex gap-[32px] items-center outline-none">
              <CiCalendar className="w-[24px] h-[24px] " />
              <h1>status</h1>
              <input type="text" placeholder="Not selected" />
            </div>
            <div className="flex gap-[32px] items-center outline-none">
              <GoPencil className="w-[24px] h-[24px] " />
              <h1>status</h1>
              <input type="text" placeholder="Not selected" />
            </div>
          </div>
        </div>
        <div className="flex gap-[23px] items-center">
          <IoAdd />
          <h1>Add custom property</h1>
        </div>
        <div className="border-2"></div>
        <h1 className="h-[19px] text-[#C0BDBD] font-inter font-normal text-[16px] leading-[19.36px]">
          Start writing, or drag your own files here.
        </h1>
      </div>
    </div>
  );
};
