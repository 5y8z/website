import { RiTwitterXFill } from "@/components/icons";
import { CalendarDays, Linkedin } from "lucide-react";

export const LinksCard = () => {
  return (
    <div className="flex gap-2">
      <a
        href="http://www.linkedin.com/in/yz-z-295753379"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
        rel="noreferrer"
      >
        <Linkedin />
        <p className="text-[12px] text-white/90 -rotate-3">(serious stuff)</p>
      </a>
      <a
        href="http://x.com/cryharderxd"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
        rel="noreferrer"
      >
        <RiTwitterXFill className="text-2xl" />
        <p className="text-[12px] text-white/55 -rotate-3">(share memes)</p>
      </a>
    </div>
  );
};
