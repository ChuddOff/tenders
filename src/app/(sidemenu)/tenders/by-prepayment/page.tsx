"use client";

import { MdOutlineManageSearch } from "react-icons/md";
import GeomapTenderCard from "@/app/_components/home/GeomapTenderCard";
import { IoMdSearch } from "react-icons/io";
import TenderCard from "@/app/_components/shared/TenderCard";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-[20px]">
      <h1 className="text-[34px] font-bold text-black">
        Тендеры по предоплате
      </h1>
      <h2 className="max-w-[418px] text-[18px] font-semibold text-black">
        В каталоге 1 019 лотов. Показаны 1-20
      </h2>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-[12px] max-[570px]:hidden">
          <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
            <input
              type="text"
              placeholder="Поиск по названию"
              className="cursor-text font-normal text-[#000000] focus:border-none focus:outline-none"
            />
            <MdOutlineManageSearch size={25} className="text-main" />
          </div>
          <div className="flex items-center justify-center rounded-[100%] bg-main p-3">
            <IoMdSearch className="text-white" />
          </div>
        </div>
      </div>
      <ul className="flex w-full flex-wrap justify-between gap-[20px]">
        {Array.from({ length: 101 }).map((_, i) => (
          <GeomapTenderCard key={i} className="w-full max-w-[450px]" />
        ))}
      </ul>
      {Array.from({ length: 15 }).map((_, i) => (
          <TenderCard
              key={i}
              titleClassname="max-w-80%"
              className="bg-main px-5 py-3 text-white"
              showCheckbox={false}
              showPinStar={false}
              showPlacment={false}
              showLeftDays={false}
              showStatus={false}
          />
      ))}
    </div>
  );
}
