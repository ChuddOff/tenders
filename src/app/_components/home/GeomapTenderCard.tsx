import React from "react";
import { FaMoneyCheck } from "react-icons/fa6";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  status?: string;
}

export default function Card({ className }: Props) {
  return (
    <div
      className={`flex w-[350px] flex-col items-center gap-3 rounded-3xl bg-main px-5 py-3 ${className ?? ""}`}
    >
      <p className="font-comfortaa text-sm font-normal text-[#e6e6e6]">
        Работы по установке (монтажу) оборудования/приборов учета воды.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <FaMoneyCheck className="text-lime-600" size={20} />
          <p className="font-comfortaa text-white">4 730 000</p>
        </div>
        <div>
          <p className="font-comfortaa text-white">
            <span className="text-lime-600">Статус:</span> Название области
          </p>
        </div>
      </div>
      <p className="text-[12px] font-normal text-white">
        24.08.2024 - 03.09.2024
      </p>
    </div>
  );
}
