import Image from "next/image";
import img1 from "../../public/img1.png";

export const HeroItems = () => {
  return (
    <div className="flex p-[16px] border-[1px] rounded-[8px] gap-[20px] w-fit bg-white ">
      <Image className="w-[77px] h-[61px]" src={img1} alt="img" />
      <div className="flex flex-col">
        <h1 className="text-[#757575] font-inter font-semibold text-[16px] leading-[19.36px]">
          {" "}
          Introducing tags
        </h1>
        <h2 className="font-inter font-normal text-[14px] leading-[16.94px]  text-[#868686]">
          Easily categorize and find your notes <br /> by adding tags. Keep your{" "}
          <br />
          workspace clutter-free and efficient.
        </h2>
      </div>
    </div>
  );
};
