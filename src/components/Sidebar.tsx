"use client";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RiHome2Line } from "react-icons/ri";
import { CiViewBoard } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { IoAddCircleSharp } from "react-icons/io5";
import { signOut } from "next-auth/react";

export const Sidebar = ({ setVisibleMenu, user }: any) => {
  return (
    <div className="w-[285px] h-screen p-[16px] bg-[#FFFFFF]  ">
      <div className="w-[253px] h-[363px] ">
        <div className="flex  w-[253px] h-[31px] items-center mb-2">
          <h1 className="border-2  px-2 py-0.5 mr-2">{user.slice(0, 1)}</h1>
          <h1>{user}</h1>
        </div>
        <div className="flex w-[253px] h-[40px] justify-between bg-white mb-2">
          <div className="flex w-[112px] pl-1 items-center gap-3">
            <IoIosNotificationsOutline className="w-[20px] h-[25px]" />
            <MdOutlineLightMode className="w-[24px] h-[24px]" />
            <RxDoubleArrowRight className="w-[24px] h-[24px]" />
          </div>
          <button
            className="px-3 bg-[#F4F4F4] rounded-[4px] text-[#797979] cursor-pointer hover:bg-[#cbcaca]"
            onClick={() => {
              signOut({
                callbackUrl: "/signin",
              });
            }}
          >
            Logout
          </button>
        </div>

        <div className="flex flex-col h-[268px]">
          <div className="flex h-[40px] items-center gap-[14px] bg-[#DDDDDD] py-[4px] px-[8px]">
            <RiHome2Line className="w-[24px] h-[24px] text-[#797979]" />
            <h1 className="text-[#797979]">Home</h1>
          </div>
          <div className="flex h-[40px] items-center gap-[14px] py-[4px] px-[8px] ">
            <CiViewBoard className="w-[24px] h-[24px] text-[#797979]" />
            <h1 className="text-[#797979]">Board</h1>
          </div>
          <div className="flex h-[40px] items-center gap-[14px] py-[4px] px-[8px]">
            <CiSettings className="w-[24px] h-[24px] text-[#797979]" />
            <h1 className="text-[#797979]">Settings</h1>
          </div>
          <div className="flex h-[40px] items-center gap-[14px] py-[4px] px-[8px]">
            <GoPeople className="w-[24px] h-[24px] text-[#797979]" />
            <h1 className="text-[#797979]">People</h1>
          </div>
          <div className="flex h-[40px] items-center gap-[14px] py-[4px] px-[8px]">
            <BsGraphUp className="w-[24px] h-[24px] text-[#797979]" />
            <h1 className="text-[#797979]">Analytics</h1>
          </div>
          <div className="h-[40px] flex items-center justify-center bg-[#4C38C2] gap-[8px] mt-2 rounded-[8px]">
            <button
              className=" text-white px-[8px] py-[8px] font-inter text-[20px] font-medium "
              onClick={() => {
                setVisibleMenu(true);
              }}
            >
              Create new task
            </button>
            <IoAddCircleSharp className="w-[24px] h-[24px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
