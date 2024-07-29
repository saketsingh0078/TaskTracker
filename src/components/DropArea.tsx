import { useState } from "react";

const DropArea = ({ onDrop }: any) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      className={
        showDrop
          ? "w-[256.75px]  px-[14px] py-[13px] rounded-[8px] border-[1px] border-dashed border-[#DEDEDE] mb-2 mt-2 bg-white transition-all duration-200 ease-in-out block opacity-75"
          : " opacity-0"
      }
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Here
    </div>
  );
};

export default DropArea;
