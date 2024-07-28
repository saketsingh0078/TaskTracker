import { HeroItems } from "./HeroItems";

export const Hero = () => {
  return (
    <div className="flex gap-[8px] w-full mb-4">
      <HeroItems />
      <HeroItems />
      <HeroItems />
    </div>
  );
};
