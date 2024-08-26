import React from "react";
import { IoMdSearch } from "react-icons/io";

interface HeaderProps {}

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center gap-[130px]">
      <h1 className="text-[42px] font-bold text-main">Tender</h1>
      <div className="flex gap-[12px]">
        <div className="flex h-[44px] items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="h-[43px] cursor-text rounded-[12px] text-[14px] text-[22px] font-normal text-[#000000] focus:border-none focus:outline-none"
          />
          <img src="./advancedSearch.svg" alt="" />
        </div>
        <div className="flex h-[44px] w-[45px] items-center justify-center rounded-[100%] bg-main">
          <IoMdSearch size={19} className="text-white" />
        </div>
      </div>
      <img
        src="./ava.jpg"
        alt="ava"
        className="h-[60px] w-[60px] rounded-[100%]"
      />
    </header>
  );
};

export default Header;
