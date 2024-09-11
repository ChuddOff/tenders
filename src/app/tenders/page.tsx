import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import {
  FaAccessibleIcon,
  FaHandshakeSimple,
  FaRegCircle,
  FaRegFileLines,
  FaRegHandshake,
  FaSearchengin,
  FaStar,
} from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import { GoGitPullRequest } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";
import { LuFolderCog } from "react-icons/lu";
import { IoChatboxEllipsesSharp, IoFolderOutline } from "react-icons/io5";
import {
  RiArrowDownSFill,
  RiArrowDropDownLine,
  RiFolderChart2Line,
} from "react-icons/ri";
import { MdOutlineSendTimeExtension, MdScheduleSend } from "react-icons/md";
import { BsFillFileEarmarkPlusFill, BsPinAngleFill } from "react-icons/bs";
import { TbEyeCheck, TbSquareRoundedPercentage } from "react-icons/tb";
import { BiHide } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, Label, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "../_components/auth/LoginForm";
import RegisterForm from "../_components/auth/RegisterForm";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";

export default async function Home() {
  return (
    <main className="mt-[100px] flex w-full gap-[52px] px-[60px]">
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
      <div className="flex w-full flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">
          Работы по строительству тендеров
        </h1>
        <div className="flex w-full flex-col justify-between gap-[20px] rounded-[20px] bg-[#fbfbfb]">
          <div className="flex w-full justify-between rounded-[20px] bg-[rgba(217,217,217,0.41)] p-[20px_30px] backdrop-blur-[35px]">
            <div className="flex w-full gap-[30px]">
              <div className="flex gap-[15px]">
                <FaStar />
                <a href="#" className="text-xs text-black">
                  Избранные
                </a>
              </div>
              <div className="flex gap-[15px]">
                <IoFolderOutline />
                <a href="#" className="text-xs text-black">
                  Переместить в
                </a>
              </div>
              <div className="flex gap-[15px]">
                <BsPinAngleFill />
                <a href="#" className="text-xs text-black">
                  Заметка
                </a>
              </div>
              <div className="flex gap-[15px]">
                <TbEyeCheck />
                <a href="#" className="text-xs text-black">
                  Отслеживать
                </a>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[15px]">
                <FaRegCircle />
                <a href="#" className="text-xs text-black">
                  Отслеживать
                </a>
              </div>
              <BiHide />
            </div>
          </div>
          <div className="flex w-full items-start items-center justify-start justify-around gap-[20px] px-[20px] pb-[20px]">
            <div className="flex flex-col items-center gap-[10px]">
              <h3>До окончания:</h3>
              <div className="flex h-[150px] w-[150px] flex-wrap items-center justify-center rounded-[20px] bg-[rgba(217,217,217,0.41)]">
                <p className="flex h-[75px] w-[75px] items-center justify-center text-[24px] font-bold text-black">
                  14д
                </p>
                <p className="flex h-[75px] w-[75px] items-center justify-center text-[24px] font-bold text-black">
                  14ч
                </p>
                <p className="flex h-[75px] w-[75px] items-center justify-center text-[24px] font-bold text-black">
                  14м
                </p>
                <p className="flex h-[75px] w-[75px] items-center justify-center text-[24px] font-bold text-black">
                  14с
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <p>Опубликовано: 12.12.2022</p>
              <p>Начало подачи: 12.12.2022</p>
              <p>Завершение: 12.12.2022</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <p>Заплание </p>
              <div className="flex items-center gap-[10px]">
                <p>₸ 27 185 954 330</p>
                <RiArrowDownSFill />
              </div>
              <p className="">Статус: Приём заявок</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-[50px]">
          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-medium text-black">Цена за единицу</h3>
            <p>₸ 27 185 954 330</p>
          </div>
          <div className="h-full w-[2px] bg-main" />
          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-medium text-black">Единица измерения</h3>
            <p>Работа</p>
          </div>
          <div className="h-full w-[2px] bg-main" />
          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-medium text-black">Количество</h3>
            <p>1</p>
          </div>
          <div className="h-full w-[2px] bg-main" />
          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-medium text-black">Аванс</h3>
            <p>30%</p>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-center px-2">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="info" className="w-full">
                Информация по лоту
              </TabsTrigger>
              <TabsTrigger value="comments" className="w-full">
                Комментарии
              </TabsTrigger>
              <TabsTrigger value="partnership" className="w-full">
                Партнерство (3)
              </TabsTrigger>
              <TabsTrigger value="request" className="w-full">
                Подача заявки
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="info"
              className="mt-[20px] flex flex-col gap-[20px]"
            >
              <div className="flex justify-between gap-[10px]">
                <p>Объявление:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>№ Лота:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Тип закупки:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Способ проведения:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Пункт плана:</p>
                <p>Перейти к плану</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Источник:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Организатор:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Место поставки:</p>
                <p>Акмолинская область, Целиноградский район, с.Коянды </p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Описание лота:</p>
                <p>Требуется платная подписка</p>
              </div>
              <div className="flex justify-between gap-[10px]">
                <p>Код ТРУ:</p>
                <p>*22123.200.000005</p>
              </div>
            </TabsContent>
            <TabsContent
              value="comments"
              className="mt-[20px] flex flex-col gap-[20px]"
            >
              <div>
                <div className="flex gap-[10px]">
                  <FaRegHandshake />
                  <h3>Оставить заявку на партнерство</h3>
                </div>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>
            <TabsContent value="partnership">
              <RegisterForm />
            </TabsContent>
            <TabsContent value="request">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
