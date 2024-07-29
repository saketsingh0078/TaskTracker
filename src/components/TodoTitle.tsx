import { BiMenuAltRight } from "react-icons/bi";
import TodoDescription from "./TodoDescription";

const TodoTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-[256.75px] h-[24px] text-[#555555]">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-inter leading-[24.2px]">{title}</h1>
        <BiMenuAltRight className="transform -rotate-180" />
      </div>
      <TodoDescription />
    </div>
  );
};

export default TodoTitle;
