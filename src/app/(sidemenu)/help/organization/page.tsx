"use client";
import React from "react";
import { LuFolderCog } from "react-icons/lu";
import { IoChatboxEllipsesSharp, IoFolderOutline } from "react-icons/io5";
import { RiFolderChart2Line } from "react-icons/ri";
import { MdOutlineSendTimeExtension, MdScheduleSend } from "react-icons/md";
import { BsFillFileEarmarkPlusFill, BsPinAngleFill } from "react-icons/bs";
import { TbEyeCheck, TbSquareRoundedPercentage } from "react-icons/tb";
import { BiHide } from "react-icons/bi";

import {
  FaAccessibleIcon,
  FaRegFileLines,
  FaRegHandshake,
  FaSearchengin,
  FaStar,
} from "react-icons/fa6";
import { GoGitPullRequest } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="mt-[100px] flex w-full gap-[52px] px-[60px] max-[1150px]:mt-[0px] max-[1150px]:gap-[0px] max-[1150px]:px-[10px]">
      <div className="flex w-full flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">Партнерство</h1>
        <h2>
          Проверка контрагентов Начать проверять Контрагент — это физическое или
          юридическое лицо, которое является одной стороной заключаемой
          гражданской или правовой договоренности. <br />
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Контрагенты Казахстана
          </span>{" "}
          <br />
          Понятие недобросовестного, ненадежного контрагента широко используется
          в тендерах. Используются реестры недобросовестных поставщиков, чтобы
          ограничить участие неблагонадежных поставщиков в закупках. Такая
          практика результативна для любого бизнеса, но лучше предотвращать
          подобные ситуации. Недобросовестный партнер — это упущенная прибыль,
          время, испорченная репутация и убытки. <br />
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Поиск и проверка контрагентов
          </span>{" "}
          <br />
          Поиск юридических лиц и индивидуальных предпринимателей осуществляется
          по БИН/ИИН или наименованию компании. <br />
          <span className="h-[50px] w-full align-bottom text-[22px] font-semibold leading-[50px] text-black">
            ЛУЧШЕЕ ПРЕДПРИЯТИЕ КАЗАХСТАНА
          </span>{" "}
          <br />
          Согласно критериям Национального рейтинга качества товаров и услуг, мы
          были удостоены почетного звания &quot;ЛУЧШЕЕ ПРЕДПРИЯТИЕ КАЗАХСТАНА
          2022&quot; в своей сфере деятельности.
        </h2>
      </div>
    </main>
  );
}
