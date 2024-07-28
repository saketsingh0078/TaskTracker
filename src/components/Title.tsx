import { GoQuestion } from "react-icons/go";

export const Title = () => {
  return (
    <div className="flex justify-between mb-3">
      <h1 className="font-barlow font-semibold text-[48px] leading-[57.6px]">
        Good Morning, Joe!
      </h1>
      <div className="flex items-center gap-[8px]">
        <span className="font-inter font-normal text-[16px] leading-[19.36px]">
          Help & feedback
        </span>
        <GoQuestion className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};
