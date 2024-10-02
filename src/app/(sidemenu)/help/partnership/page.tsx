"use client";

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
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Home() {
  return (
    <main className="mt-[100px] flex w-full gap-[52px] px-[60px] max-[1150px]:mt-[0px] max-[1150px]:gap-[0px] max-[1150px]:px-[10px]">
      <div className="flex w-full flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">Партнерство</h1>
        <h2>
          С помощью функции Партнерство вы можете найти или предложить
          финансирование, а также найти или предложить товары (работы, услуги)
          для участия в тендере. <br />
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Как найти партнера?
          </span>{" "}
          <br />
          Откройте нужный лот и перейдите во вкладку Партнерство, чтобы оставить
          заявку на поиск партнера. <br />
          Выберите вид партнерства, который вам необходим, заполните контактную
          информацию и подайте заявку. Доступны следующие виды:{" "}
        </h2>
        <ul className="list-inside list-disc text-[18px] font-normal leading-[50px] marker:text-black">
          <li>Участвую, необходимо финансирование</li>
          <li>Участвую, нужен производитель/поставщик услуг </li>
          <li>Не участвую, предоставлю финансирование</li>
          <li>Не участвую, могу поставить товар/оказать услуги</li>
        </ul>

        <h2>
          Ваше предложение будет доступно всем пользователям TenderPlus. А на
          вкладке Партнерство появится индикатор, который покажет сколько
          партнерских предложений есть в лоте на текущий момент. Также вы
          сможете увидеть сколько раз просматривали контактную информацию.{" "}
          <br />
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Как посмотреть текущие предложения на партнерство?
          </span>{" "}
          <br />
          Чтобы просмотреть все текущие партнерские предложения, перейдите в
          соответствующий раздел сайта через главное меню. Вы увидите перечень
          лотов с партнерскими предложениями, а также их количество для каждого
          лота. <br />
          Если вас интересуют только определенные виды партнерских предложений,
          нажмите Уточнить поиск, выберите необходимые и нажмите кнопку Искать.{" "}
          <br />
          Например, вы не участвуете в тендере, но готовы профинансировать —
          найдите все предложения, в которых требуется финансирование. <br />
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Дополнительная информация — Потенциальные партнеры
          </span>{" "}
          <br />
          На странице лота во вкладке Партнерство также можно найти
          дополнительную полезную информацию в разделе Потенциальные партнеры:
          контакты компаний, которые уже заключали договоры по аналогичным
          лотам. <br />
          По умолчанию в поиске выбраны все регионы и показаны договоры за
          последние 12 месяцев. Но вы можете воспользоваться фильтром и
          посмотреть компании в нужных вам регионах. <br />
          Информация по потенциальным партнерам доступна только после оформления
          одного из тарифов. <br />
          Нажмите кнопку Связаться, чтобы посмотреть контакты поставщика.
        </h2>
        <Separator className="w-full" />
        <h2>
          Все инструкции по работе с сайтом находятся в разделе Помощь по сайту.
        </h2>
      </div>
    </main>
  );
}
