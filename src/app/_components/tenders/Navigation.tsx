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

export default function Navigation() {
  return (
    <div className="flex w-full max-w-[365px] flex-col gap-[15px] rounded-[20px] bg-[rgba(217,217,217,0.41)] p-[20px_30px] backdrop-blur-[35px]">
      <h2 className="text-center text-[24px] font-bold leading-[167%] text-black">
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
    </div>
  );
}
