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
    <main className="flex w-full gap-[52px] px-[60px]">
      <div className="flex w-full flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">
          Договоры государственных закупок{" "}
        </h1>
        <h2>
          Государственные закупки — это 70-80% от всех тендеров, проводимых в
          Республике Казахстан. <br />
          Договоры государственных закупок являются идеальным источником данных
          для проведения аналитики рынка, увеличения рынка сбыта, пополнения
          клиентской базы. <br />‌
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Как это использовать?
          </span>
          <br />
          1. Наполнение клиентской базы — настраивайте параметры рассылки и
          получайте актуальную информацию по заключенным договорам. Договоры
          содержат контактную информацию победителей тендеров (телефон, e-mail,
          БИН и т.д.). <br />
          2. Горячие клиенты для банков и страховых компаний — поставщику,
          подписавшему договор, в течение 10 дней необходимо внести обеспечение
          договора в размере 3% от стоимости. В качестве обеспечения может быть
          использована банковская гарантия, либо страхование. <br />
          3. Продажи — победителю тендера необходимо исполнять договор, а значит
          ему можно предложить свои товары или услуги. <br />
          Например, вы занимаетесь поставкой металлических труб. Настройте
          рассылку на поставку труб, ремонт трубопроводов и т.д. Получаете
          информацию о заключенном договоре на ремонт трубопровода — победителю
          для исполнения договора потребуются трубы, фланцы и т.д. Свяжитесь с
          победителем и предложите свой товар. ‌<br />
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            Почему лучше у нас?
          </span>{" "}
          <br />
          Больше инструментов, больше возможностей, которых нет ни на источнике,
          ни на других сайтах!
        </h2>
        <div className="flex flex-wrap gap-[20px]">
          <div className="w-full max-w-[350px]">
            <h2 className="h-[50px] w-full text-[16px] font-semibold leading-[50px] text-black">
              Поиск по договорам, предметам договоров
            </h2>
            <h3>
              Мы создали отдельные поиски, чтобы вам было удобнее работать. В
              зависимости от того, какая информация вам нужна, можно получить
              список договоров или предметов договоров по заданным параметрам‌
            </h3>
          </div>
          <div className="w-full max-w-[350px]">
            <h2 className="h-[50px] w-full text-[16px] font-semibold leading-[50px] text-black">
              Поиск по кодам ТРУ
            </h2>
            <h3>
              Система найдет все предметы договоров по заданному ТРУ, либо
              договоры, в предметах которых есть указанный код
            </h3>
          </div>
          <div className="w-full max-w-[350px]">
            <h2 className="h-[50px] w-full text-[16px] font-semibold leading-[50px] text-black">
              Поиск по ключевым словам
            </h2>
            <h3>
              В результате запроса вы получите либо список договоров, либо
              предметов договоров, в которых присутствует указанное ключевое
              слово или словосочетание‌
            </h3>
          </div>
          <div className="w-full max-w-[350px]">
            <h2 className="h-[50px] w-full text-[16px] font-semibold leading-[50px] text-black">
              Выгрузка данных в excel
            </h2>
            <h3>
              Выгружайте данные для дальнейшей обработки полученной информации.
              Выгружать можно как договоры, так и предметы договоров E-mail
              рассылка
            </h3>
          </div>
          <div className="w-full max-w-[350px]">
            <h2 className="h-[50px] w-full text-[16px] font-semibold leading-[50px] text-black">
              E-mail рассылка
            </h2>
            <h3>
              Настройте параметры рассылки и получайте свежую информацию по
              заключенным договорам на почту‌
            </h3>
          </div>
          <div className="w-full max-w-[350px]">
            <h2 className="h-[50px] w-full text-[16px] font-semibold leading-[50px] text-black">
              Отслеживание изменений договоров
            </h2>
            <h3>
              Добавьте договор на контроль и наша система уведомит вас на
              электронную почту, если в договоре появятся изменения
            </h3>
          </div>
        </div>

        <h2>
          <span className="h-[50px] w-full text-[22px] font-semibold leading-[50px] text-black">
            ЛУЧШЕЕ ПРЕДПРИЯТИЕ КАЗАХСТАНА
          </span>{" "}
          <br />
          Согласно критериям Национального рейтинга качества товаров и услуг, мы
          были удостоены почетного звания "ЛУЧШЕЕ ПРЕДПРИЯТИЕ КАЗАХСТАНА 2022" в
          своей сфере деятельности.
        </h2>
      </div>
    </main>
  );
}
