"use client";

import React, { useState } from "react";

import { FaSortAmountDown } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TenderCard from "@/app/_components/shared/TenderCard";

export default function Home() {
  const [sortMax, setSortMax] = useState(true);
  return (
    <main className="mt-[100px] flex w-full gap-[52px] px-[60px] max-[1150px]:mt-[0px] max-[1150px]:gap-[0px] max-[1150px]:px-[10px]">
      <div className="flex w-full flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">Партнерство</h1>
        <h2 className="w-full text-[18px] font-semibold text-black">
          Вы можете оставить предложение о партнерстве в любом лоте. Для этoго
          откройте нужный лот, перейдите во вкладку партнерство и оставьте свое
          предложение.
        </h2>
        <div className="flex w-full items-center justify-between">
          <p>В каталоге 69 лотов. Показаны 1-20</p>
          <div className="flex items-center gap-[15px]">
            <p>Сортировать по:</p>
            <Select defaultValue="sum">
              <SelectTrigger className="h-[40px] w-[140px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="sum">Сумма</SelectItem>
                  <SelectItem value="up">Опубликован</SelectItem>
                  <SelectItem value="end">Завершение</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FaSortAmountDown
              style={{ transform: `rotate(${sortMax ? 0 : 180}deg)` }}
              onClick={() => setSortMax(!sortMax)}
            />
          </div>
        </div>
        <ul className="flex w-full flex-wrap justify-between gap-[20px]">
          {Array.from({ length: 4 }).map((_, i) => (
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
        </ul>
      </div>
    </main>
  );
}
