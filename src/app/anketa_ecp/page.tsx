"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex w-full justify-center gap-[52px] px-[60px]">
      <div className="flex w-2/3 flex-col items-start justify-start gap-[20px]">
        <h1 className="text-[34px] font-bold text-black">
          Анкета для регистрации на тендерных площадках
        </h1>
        <h2>
          Компания «TenderPlus» предлагает пользователям нашего сайта услугу
          регистрации на тендерных площадках Казахстана.{" "}
        </h2>
        <h2 className="w-full text-[22px] font-semibold leading-[50px] text-black">
          В данную услугу входят:
        </h2>
        <ul className="list-inside list-disc text-[18px] font-normal leading-[30px] marker:text-black">
          <li>подача заявки на получение электронного ключа (ЭЦП); </li>
          <li>консультации по подготовке необходимых документов в ЦОН; </li>
          <li>помощь в установке сертификатов на ПК; </li>
          <li>
            регистрация на тендерных площадках Казахстана (список площадок
            смотрите в тарифах);{" "}
          </li>
          <li>
            резервное копирование (экспорт и импорт) сертификатов на случай
            сбоев.{" "}
          </li>
        </ul>
        <h2 className="w-full text-[22px] font-semibold leading-[50px] text-black">
          Анкета для заказа услуги
        </h2>
        <div className="flex w-full items-center justify-center overflow-hidden rounded-[20px] shadow-2xl">
          <form className="z-20 flex w-full flex-col rounded-[20px] border border-[#e8e8e8] p-7 font-sans text-black backdrop-blur-3xl">
            <div className="mb-[20px] flex flex-col gap-[10px]">
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="Полное наименование "
                required
              />
              <input
                type="text"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordNew"
                placeholder="БИН "
                required
              />
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="Ф.И.О руководителя "
                required
              />
              <input
                type="text"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordNew"
                placeholder="ИИН Руководителя "
                required
              />
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="Юр. адрес "
                required
              />
              <input
                type="text"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordNew"
                placeholder="Факт. адрес "
                required
              />
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="E-mail "
                required
              />
              <input
                type="text"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordNew"
                placeholder="Номер моб. телефона "
                required
              />
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="Номер стац. телефона"
                required
              />
              <input
                type="text"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordNew"
                placeholder=" Наименование банка "
                required
              />
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="Расчетный счет "
                required
              />
              <input
                type="text"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordNew"
                placeholder="ФИО ответственного лица "
                required
              />
              <input
                type="number"
                className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                id="passwordOld"
                placeholder="Телефон ответственного лица"
                required
              />
            </div>

            <Button
              type="submit"
              className={`w-full max-w-[150px] rounded-md bg-black py-1 text-white`}
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
