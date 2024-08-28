import Image from "next/image";
import React from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import avatar from "@/images/ava.jpg";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1000px] items-center justify-between px-9 pt-3">
      <h1 className="text-3xl font-bold text-main">Tender</h1>
      <div className="flex items-center gap-[12px] max-[570px]:hidden">
        <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="cursor-text rounded-[12px] font-normal text-[#000000] focus:border-none focus:outline-none"
          />
          <MdOutlineManageSearch size={25} className="text-main" />
        </div>
        <div className="flex items-center justify-center rounded-[100%] bg-main p-3">
          <IoMdSearch className="text-white" />
        </div>
      </div>
      <Image src={avatar} alt="avatar" className="h-9 w-9 rounded-full" />
    </header>
  );
};

export default Header;
