import { HeroItems } from "./HeroItems";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";

export const Hero = () => {
  const obj1 = {
    title: "Introducing tags ",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
    img: img1,
  };

  const obj2 = {
    title: "Share Notes Instantly tags ",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
    img: img2,
  };

  const obj3 = {
    title: "Access Anywhere ",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
    img: img3,
  };

  return (
    <div className="flex gap-[8px] w-full mb-4">
      <HeroItems {...obj1} />
      <HeroItems {...obj2} />
      <HeroItems {...obj3} />
    </div>
  );
};
