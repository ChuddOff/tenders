import Image from "next/image";
import React from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import avatar from "@/images/ava.jpg";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1500px] items-center justify-between gap-[130px] px-9">
      <h1 className="text-[42px] font-bold text-main">Tender</h1>
      <div className="flex gap-[12px]">
        <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="cursor-text rounded-[12px] text-[22px] font-normal text-[#000000] focus:border-none focus:outline-none"
          />
          <MdOutlineManageSearch size={19} className="text-main" />
        </div>
        <div className="flex items-center justify-center rounded-[100%] bg-main">
          <IoMdSearch size={19} className="text-white" />
        </div>
      </div>
      <Image
        src={avatar}
        alt="avatar"
        className="rounded-full"
        width={19}
        height={19}
      />
    </header>
  );
};

export default Header;
