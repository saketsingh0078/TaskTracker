"use client";
import { RxCross2 } from "react-icons/rx";
import { CiShare2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineOpenInFull } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { CiCalendar } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { IoAdd } from "react-icons/io5";
import { useEffect, useState } from "react";
import { createTask } from "@/lib/actions/createTask";

export const TaskAddMenu = ({
  setVisibleMenu,
  getData,
  status,
  setStatus,
}: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dataUpdated, setDataUpdated] = useState(false);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="w-[622px] h-[100vh] pt-[16px] px-[27px] bg-[white]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex justify-between text-[#797979] ">
          <div className="flex gap-[16px] items-center">
            <RxCross2
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={async () => {
                try {
                  const result: any = await createTask(
                    title,
                    description,
                    status,
                    priority
                  );

                  if (!result.success) {
                    console.error("Error Creating task:", result.message);
                  } else {
                    console.log(result.task);
                  }
                } catch (error: any) {
                  console.error("Error Creating task:", error);
                }
                setDataUpdated(true);
                setVisibleMenu(false);
              }}
            />
            <MdOutlineOpenInFull className="w-[24px] h-[24px] rotate-90" />
          </div>
          <div className="flex gap-[14px] ">
            <div className="flex rounded-[4px] p-[8px] gap-[16px] bg-[#F4F4F4] items-center">
              <h1 className="font-inter font-normal text-[16px] leading-[19.36px]">
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
        <form
          className="flex flex-col gap-[32px]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-[622px] h-[58px]">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="text-[48px] font-semibold font-barlow leading-[57.6px]"
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div className="flex flex-col gap-[32px] justify-center">
            <div className="flex gap-[32px] items-center outline-none">
              <MdOutlineLightMode className="w-[24px] h-[24px] " />
              <h1>status</h1>
              <select
                value={status || " "}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="To do">To do</option>
                <option value="In Progress">In Progress</option>
                <option value="Under Review">Under Review</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
            <div className="flex gap-[32px] items-center outline-none">
              <FcHighPriority className="w-[24px] h-[24px] " />
              <h1>Priority</h1>
              <select
                value={priority}
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <div className="flex gap-[32px] items-center outline-none">
              <CiCalendar className="w-[24px] h-[24px] " />
              <h1>Deadline</h1>
              <input type="number" placeholder="Not selected" />
            </div>
            <div className="flex gap-[32px] items-center outline-none">
              <GoPencil className="w-[24px] h-[24px] " />
              <h1>Description</h1>
              <input
                type="text"
                placeholder="Not selected"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </form>
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
