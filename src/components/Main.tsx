import { FeatureButton } from "./FeatureButton";
import { Hero } from "./Hero";
import { TaskAddMenu } from "./TaskAddMenu";
import { Title } from "./Title";
import { Todo } from "./Todo";

export const Main = () => {
  return (
    <div className="w-full pt-[24px] pl-[16px] pr-[32px]">
      <Title />
      <Hero />
      <FeatureButton />
      <Todo />
    </div>
  );
};
