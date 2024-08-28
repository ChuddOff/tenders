import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import "../styles/globals.css";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="mt-[100px] flex w-full gap-[52px] px-[60px]">
      <div className="flex w-full max-w-[365px] flex-col gap-[15px] rounded-[20px] bg-[rgba(217,217,217,0.41)] p-[20px_30px] backdrop-blur-[35px]">
        <h2 className="text-center text-[24px] font-bold leading-[167%] text-black">
          тендеры и закупки
        </h2>
        <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        <h3 className="text-[16px] font-normal text-[#757575]">ПРИКРЕПЛЕНЫЕ</h3>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-[75px]">
        <h1 className="text-[34px] font-bold text-black">
          Тендеры по области Казахстана
        </h1>
        <h2 className="text-[18px] font-semibold text-black">
          Выберите нужную вам область, чтобы посмотреть тендерыв по этой области
        </h2>
      </div>
    </main>
  );
}
