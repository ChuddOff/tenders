import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

import React from "react";

import "../styles/globals.css";

export default async function Home() {
  return (
    <main className="w-full">
      <div className="flex w-full flex-col items-center gap-[50px]">
        <div className="flex items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-[300px] bg-main" />
          <h3 className="text-center text-[40px] font-semibold">
            Как это работает
          </h3>
          <hr className="h-[2px] w-[300px] bg-main" />
        </div>

        <div className="flex">
          <section className="px-[40px] py-[80px]">
            <div className="flex">
              <p className="h-[120px] align-top text-[120px] font-semibold leading-[100px] text-main">
                01
              </p>
              <p className="text-[24px] font-semibold leading-[150%] text-main">
                Бесплатно <br /> зарегистрируйтесь
              </p>
            </div>
            <h4 className="w-[360px]">
              Создайте аккаунт для своей компании, это займет всего пару минут
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim{" "}
            </h4>
          </section>
          <section className="border-x-[1px] border-main px-[40px] py-[80px]">
            <div className="flex">
              <p className="h-[120px] align-top text-[120px] font-semibold leading-[100px] text-main">
                02
              </p>
              <p className="text-[24px] font-semibold leading-[150%] text-main">
                Получите личного <br /> менеджера
              </p>
            </div>
            <h4 className="w-[360px]">
              Он поможет вам настроить параметры рассылки в Личном кабинете и
              будет консультировать вас по всем вопросам Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </h4>
          </section>
          <section className="px-[40px] py-[80px]">
            <div className="flex">
              <p className="h-[120px] align-top text-[120px] font-semibold leading-[100px] text-main">
                03
              </p>
              <p className="text-[24px] font-semibold leading-[150%] text-main">
                Выигрывайте <br /> заказы и тендеры
              </p>
            </div>
            <h4 className="w-[360px]">
              Просматривайте информацию о закупках, принимайте участие и
              выигрывайте! Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore
            </h4>
          </section>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[50px]">
        <div className="flex items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-[300px] bg-main" />
          <h3 className="text-center text-[40px] font-semibold">Услуги</h3>
          <hr className="h-[2px] w-[300px] bg-main" />
        </div>

        <div className="flex">
          <section className="flex flex-col gap-[20px] px-[40px] py-[80px]">
            <div className="flex h-[98px] w-[98px] items-center justify-center rounded-[10px] border-[1px] border-main">
              <img
                src="./cloud.svg"
                alt="cloud"
                className="w-[50px] rounded-[50px]"
              />
            </div>
            <p className="text-[24px] font-semibold leading-[150%] text-main">
              Прохождение ПКО
            </p>
            <h4 className="w-[360px]">
              Join us as a UX Designer and help shape exceptional user
              experiences. Conduct user research, analyze data, and create
              wireframes and prototypes to design intuitive and user-centric
              interfaces. Collaborate closely with UI Designers, developers, and
              stakeholders to ensure seamless and enjoyable user journeys.
            </h4>
            <button className="flex h-[60px] w-[380px] flex-row items-center justify-center gap-[10px] rounded-lg bg-main p-[18px_16px] text-white">
              Apply Now
            </button>
          </section>
          <section className="flex flex-col gap-[20px] px-[40px] py-[80px]">
            <div className="flex h-[98px] w-[98px] items-center justify-center rounded-[10px] border-[1px] border-main">
              <img
                src="./purpous.svg"
                alt="cloud"
                className="w-[50px] rounded-[50px]"
              />
            </div>
            <p className="text-[24px] font-semibold leading-[150%] text-main">
              Прохождение ПКО
            </p>
            <h4 className="w-[360px]">
              Join us as a UX Designer and help shape exceptional user
              experiences. Conduct user research, analyze data, and create
              wireframes and prototypes to design intuitive and user-centric
              interfaces. Collaborate closely with UI Designers, developers, and
              stakeholders to ensure seamless and enjoyable user journeys.
            </h4>
            <button className="flex h-[60px] w-[380px] flex-row items-center justify-center gap-[10px] rounded-lg bg-main p-[18px_16px] text-white">
              Apply Now
            </button>
          </section>
          <section className="flex flex-col gap-[20px] px-[40px] py-[80px]">
            <div className="flex h-[98px] w-[98px] items-center justify-center rounded-[10px] border-[1px] border-main">
              <img
                src="./sheet.svg"
                alt="cloud"
                className="w-[50px] rounded-[50px]"
              />
            </div>
            <p className="text-[24px] font-semibold leading-[150%] text-main">
              Проверка контрагентов
            </p>
            <h4 className="w-[360px]">
              Join us as a UX Designer and help shape exceptional user
              experiences. Conduct user research, analyze data, and create
              wireframes and prototypes to design intuitive and user-centric
              interfaces. Collaborate closely with UI Designers, developers, and
              stakeholders to ensure seamless and enjoyable user journeys.
            </h4>
            <button className="flex h-[60px] w-[380px] flex-row items-center justify-center gap-[10px] rounded-lg bg-main p-[18px_16px] text-white">
              Apply Now
            </button>
          </section>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-[50px]">
        <div className="flex items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-[300px] bg-main" />
          <h3 className="text-center text-[40px] font-semibold">Услуги</h3>
          <hr className="h-[2px] w-[300px] bg-main" />
        </div>

        <div className="w-[99vw] overflow-hidden">
          <div className="marquee-content flex gap-[30px] whitespace-nowrap">
            <img
              src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number-thumbnail.png"
              className="h-[105px]"
              alt="google"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-[50px]">
        <div className="flex items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-[300px] bg-main" />
          <h3 className="text-center text-[40px] font-semibold">Услуги</h3>
          <hr className="h-[2px] w-[300px] bg-main" />
        </div>

        <div className="flex items-center justify-center gap-[25px]">
          <div></div>
          <div className="flex h-[740px] w-[365px] flex-col items-center justify-start gap-[25px] rounded-[20px] bg-[rgba(217,217,217,0.41)] p-[20px_30px] backdrop-blur-[35px]">
            <h3 className="text-center text-[24px] font-semibold leading-[167%] text-black">
              г. Астана <br /> Акмолинская область
            </h3>
            <hr className="h-[2px] w-[300px] bg-main" />
            <p className="text-center text-[24px] font-semibold leading-[167%] text-black">
              В каталоге 10 126 лотов.
            </p>
            <div className="flex">
              <p>Сортировать по:</p>
              <div>
                <p>Сумма</p>
                <SlArrowDown className="h-[12px] w-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
