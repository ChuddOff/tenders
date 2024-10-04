"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { BsFillFileEarmarkPlusFill, BsPinAngleFill } from "react-icons/bs";
import {
  FaAccessibleIcon,
  FaCommentAlt,
  FaRegHandshake,
  FaSearchengin,
  FaStar,
} from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { GoGitPullRequest } from "react-icons/go";
import { IoChatboxEllipsesSharp, IoFolderOutline } from "react-icons/io5";
import { LuFolderCog } from "react-icons/lu";
import { MdOutlineSendTimeExtension, MdScheduleSend } from "react-icons/md";
import { RiFolderChart2Line } from "react-icons/ri";
import { TbEyeCheck, TbSquareRoundedPercentage } from "react-icons/tb";
import { useSwipeable } from "react-swipeable";

export default function Navigation() {
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [swipeProgress, setSwipeProgress] = useState<number>(0);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setIsOpening(true);
      if (!isOpen) {
        setSwipeProgress(Math.min(280, eventData.deltaX));
      } else if (isOpen) {
        setSwipeProgress(Math.max(0, 280 + eventData.deltaX));
      }
      document.body.style.overflow = "hidden";
    },
    onSwiped: () => {
      document.body.style.overflow = "auto";
      setIsOpening(false);
      if ((!isOpen && swipeProgress > 50) ?? (isOpen && swipeProgress > 230)) {
        setSwipeProgress(280);
        setIsOpen(true);
      } else {
        setSwipeProgress(0);
        setIsOpen(false);
      }
    },
    trackTouch: true,
  });
  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    }
    if (isOpen === false) {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (window.innerWidth < 1150)
    return (
      <>
        <div
          className={`pointer-events-none fixed left-0 top-0 z-40 flex h-full items-end gap-[20px] ${!isOpening && "duration-300 ease-in-out"}`}
          style={{
            transform: `translateX(${Math.max(0, swipeProgress) - 280}px)`,
          }}
        >
          <div
            className={`pointer-events-auto z-50 flex h-full w-[280px] overflow-y-scroll border-r-[1px] border-black bg-white dark:bg-black`}
          >
            <div className="flex h-[100vh] w-[280px] flex-col gap-[15px] rounded-[20px] p-[20px_20px] backdrop-blur-[35px]">
              <Menu />
            </div>
          </div>
          <Button
            {...handlers}
            variant="outline"
            className={`pointer-events-auto z-30 mb-[20px] ${!isOpening && "duration-300 ease-in-out"}`}
            onClick={() => {
              setIsOpen(!isOpen);
              setSwipeProgress(isOpen ? 0 : 280);
            }}
          >
            Открыть меню
          </Button>
        </div>
      </>
    );

  return (
    <div className="flex max-h-[900px] w-full max-w-[365px] flex-col gap-[15px] rounded-[20px] bg-[rgba(217,217,217,0.41)] p-[20px_30px] backdrop-blur-[35px]">
      <Menu />
    </div>
  );
}

const Menu = () => {
  return (
    <>
      <h2 className="text-center text-[24px] font-bold uppercase leading-[167%] text-black">
        тендеры и закупки
      </h2>
      <hr className="h-[2px] w-full max-w-[300px] bg-main" />
      <h3 className="text-[16px] font-normal text-[#757575]">ПРИКРЕПЛЕНЫЕ</h3>
      <div className="flex gap-[15px]">
        <FaAccessibleIcon />
        <a href="#" className="text-xs text-black">
          Мои тендеры
        </a>
      </div>
      <div className="flex gap-[15px]">
        <FaRegHandshake />
        <a href="#" className="text-xs text-black">
          Партнерство
        </a>
      </div>
      <h3 className="text-[16px] font-normal text-[#757575]">ИНСТРУМЕНТЫ</h3>
      <div className="flex gap-[15px]">
        <FaStar />
        <a href="#" className="text-xs text-black">
          Избранные
        </a>
      </div>
      <div className="flex gap-[15px]">
        <TbEyeCheck />

        <a href="#" className="text-xs text-black">
          На контроле
        </a>
      </div>
      <div className="flex gap-[15px]">
        <BsPinAngleFill />
        <a href="#" className="text-xs text-black">
          Мои заметки
        </a>
      </div>
      <div className="flex gap-[15px]">
        <FaSearchengin />
        <a href="#" className="text-xs text-black">
          Шаблоны поиска
        </a>
      </div>
      <div className="flex gap-[15px]">
        <BiHide />
        <a href="#" className="text-xs text-black">
          Скрытые лоты
        </a>
      </div>
      <div className="flex gap-[15px]">
        <FaCommentAlt />
        <a href="#" className="text-xs text-black">
          Комментарии
        </a>
      </div>
      <h3 className="text-[16px] font-normal text-[#757575]">ПАПКИ</h3>
      <div className="flex gap-[15px]">
        <LuFolderCog />
        <a href="#" className="text-xs text-black">
          Управление папками
        </a>
      </div>
      <div className="flex gap-[15px]">
        <IoFolderOutline />

        <a href="#" className="text-xs text-black">
          Проработать
        </a>
      </div>
      <div className="flex gap-[15px]">
        <RiFolderChart2Line />

        <a href="#" className="text-xs text-black">
          Архивные папки
        </a>
      </div>
      <h3 className="text-[16px] font-normal text-[#757575]">МЕНЮ</h3>
      <div className="flex gap-[15px]">
        <MdOutlineSendTimeExtension />

        <a href="#" className="text-xs text-black">
          Параметры рассылки
        </a>
      </div>
      <div className="flex gap-[15px]">
        <MdScheduleSend />

        <a href="#" className="text-xs text-black">
          История рассылок
        </a>
      </div>
      <div className="flex gap-[15px]">
        <FaRegFileLines />

        <a href="#" className="text-xs text-black">
          Мои файлы
        </a>
      </div>
      <div className="flex gap-[15px]">
        <GoGitPullRequest />
        <a href="#" className="text-xs text-black">
          Мои заявки
        </a>
      </div>
      <div className="flex gap-[15px]">
        <BsFillFileEarmarkPlusFill />

        <a href="#" className="text-xs text-black">
          Объявить тендер
        </a>
      </div>
      <div className="flex gap-[15px]">
        <IoChatboxEllipsesSharp />

        <a href="#" className="text-xs text-black">
          Мои обсуждения
        </a>
      </div>
      <div className="flex gap-[15px]">
        <TbSquareRoundedPercentage />

        <a href="#" className="text-xs text-black">
          Мои рефералы
        </a>
      </div>
    </>
  );
};
