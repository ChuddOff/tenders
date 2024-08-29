import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function BlogItem() {
  return (
    <Link href={"/"} className="flex max-w-[350px] max-[700px]:max-w-full">
      <div className="flex flex-col gap-[9px]">
        <h3 className="text-xl font-medium text-[#1c1c1c]">
          Dream Homes Realty
        </h3>
        <p className="text-[18px] font-normal leading-[150%] text-[#b0b0b0]">
          Dream Homes Realty wanted an intuitive web portal for showcasing their
          property listings.... <span className="text-greenl">Read More</span>
        </p>
      </div>
      <div className="flex items-center justify-center self-start rounded-md bg-main p-2 transition-[1s] hover:rotate-[45deg] max-[1060px]:hidden">
        <GoArrowUpRight size={20} className="text-white" />
      </div>
    </Link>
  );
}
