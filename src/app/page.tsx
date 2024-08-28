import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import "../styles/globals.css";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="w-full">
      <div className="flex w-full flex-col items-center gap-[50px]">
        <div className="flex w-full items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center text-[40px] font-semibold max-[700px]:text-[30px]">
            Как это работает
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        </div>

        <div className="flex flex-wrap justify-center">
          <section className="px-[40px]">
            <div className="flex gap-[24px]">
              <p className="h-[120px] align-top text-[120px] font-semibold leading-[100px] text-main max-[700px]:text-[80px] max-[700px]:leading-[70px]">
                01
              </p>
              <div className="flex flex-col self-start border-b-[1px] border-black pb-[20px]">
                <p className="text-[24px] font-semibold leading-[150%] text-main max-[700px]:text-[20px]">
                  Бесплатно <br /> зарегистрируйтесь
                </p>
              </div>
            </div>
            <h4 className="max-w-[360px] text-[16px] font-normal leading-[150%] text-[#777] max-[700px]:text-[12px]">
              Создайте аккаунт для своей компании, это займет всего пару минут
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim{" "}
            </h4>
          </section>
          <section className="border-x-[1px] border-main px-[40px] max-[1390px]:border-x-[0px]">
            <div className="flex gap-[24px]">
              <p className="h-[120px] align-top text-[120px] font-semibold leading-[100px] text-main max-[700px]:text-[80px] max-[700px]:leading-[70px]">
                02
              </p>

              <div className="flex flex-col self-start border-b-[1px] border-black pb-[20px]">
                <p className="text-[24px] font-semibold leading-[150%] text-main max-[700px]:text-[20px]">
                  Получите личного <br /> менеджера
                </p>
              </div>
            </div>
            <h4 className="max-w-[360px] text-[16px] font-normal leading-[150%] text-[#777] max-[700px]:text-[12px]">
              Он поможет вам настроить параметры рассылки в Личном кабинете и
              будет консультировать вас по всем вопросам Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </h4>
          </section>
          <section className="px-[40px]">
            <div className="flex gap-[24px]">
              <p className="h-[120px] align-top text-[120px] font-semibold leading-[100px] text-main max-[700px]:text-[80px] max-[700px]:leading-[70px]">
                03
              </p>
              <div className="flex flex-col self-start border-b-[1px] border-black pb-[20px]">
                <p className="text-[24px] font-semibold leading-[150%] text-main max-[700px]:text-[20px]">
                  Выигрывайте <br /> заказы и тендеры
                </p>
              </div>
            </div>
            <h4 className="max-w-[360px] text-[16px] font-normal leading-[150%] text-[#777] max-[700px]:text-[12px]">
              Просматривайте информацию о закупках, принимайте участие и
              выигрывайте! Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore
            </h4>
          </section>
        </div>
      </div>
      <div className="mt-[50px] flex w-full flex-col items-center gap-[50px]">
        <div className="flex w-full items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center text-[40px] font-semibold max-[700px]:text-[30px]">
            Услуги
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        </div>

        <div className="flex flex-wrap justify-center gap-[40px]">
          <section className="flex flex-col gap-[20px]">
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
            <h4 className="max-w-[360px]">
              Join us as a UX Designer and help shape exceptional user
              experiences. Conduct user research, analyze data, and create
              wireframes and prototypes to design intuitive and user-centric
              interfaces. Collaborate closely with UI Designers, developers, and
              stakeholders to ensure seamless and enjoyable user journeys.
            </h4>
            <button className="flex h-[60px] max-w-[380px] flex-row items-center justify-center gap-[10px] rounded-lg bg-main p-[18px_16px] text-white">
              Apply Now
            </button>
          </section>
          <section className="flex flex-col gap-[20px]">
            <div className="flex h-[98px] max-w-[98px] items-center justify-center rounded-[10px] border-[1px] border-main">
              <img
                src="./purpous.svg"
                alt="cloud"
                className="w-[50px] rounded-[50px]"
              />
            </div>
            <p className="text-[24px] font-semibold leading-[150%] text-main">
              Прохождение ПКО
            </p>
            <h4 className="max-w-[360px]">
              Join us as a UX Designer and help shape exceptional user
              experiences. Conduct user research, analyze data, and create
              wireframes and prototypes to design intuitive and user-centric
              interfaces. Collaborate closely with UI Designers, developers, and
              stakeholders to ensure seamless and enjoyable user journeys.
            </h4>
            <button className="flex h-[60px] max-w-[380px] flex-row items-center justify-center gap-[10px] rounded-lg bg-main p-[18px_16px] text-white">
              Apply Now
            </button>
          </section>
          <section className="flex flex-col gap-[20px]">
            <div className="flex h-[98px] max-w-[98px] items-center justify-center rounded-[10px] border-[1px] border-main">
              <img
                src="./sheet.svg"
                alt="cloud"
                className="w-[50px] rounded-[50px]"
              />
            </div>
            <p className="text-[24px] font-semibold leading-[150%] text-main">
              Проверка контрагентов
            </p>
            <h4 className="max-w-[360px]">
              Join us as a UX Designer and help shape exceptional user
              experiences. Conduct user research, analyze data, and create
              wireframes and prototypes to design intuitive and user-centric
              interfaces. Collaborate closely with UI Designers, developers, and
              stakeholders to ensure seamless and enjoyable user journeys.
            </h4>
            <button className="flex h-[60px] max-w-[380px] flex-row items-center justify-center gap-[10px] rounded-lg bg-main p-[18px_16px] text-white">
              Apply Now
            </button>
          </section>
        </div>
      </div>

      <div className="mt-[50px] flex w-full flex-col items-center gap-[50px]">
        <div className="flex w-full items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center text-[40px] font-semibold max-[700px]:text-[30px]">
            С нами работают
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
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
        <div className="flex w-full items-center justify-center gap-[30px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center text-[40px] font-semibold max-[700px]:text-[30px]">
            Геокарта тендеров
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        </div>

        <div className="flex items-center justify-center gap-[25px] max-[1410px]:flex-col">
          <div></div>
          <div className="relative h-[740px] max-w-[365px] rounded-[20px] bg-[rgba(217,217,217,0.41)]">
            <div className="z-1 absolute right-0 h-[200px] w-[200px] rounded-full bg-main blur-[100px]" />
            <div className="z-1 absolute bottom-0 h-[200px] w-[200px] rounded-full bg-main blur-[100px]" />
            <div className="relative z-10 flex flex-col items-center justify-start gap-[25px] p-[20px_30px] max-[700px]:p-[20px_10px]">
              <h3 className="text-center text-[24px] font-semibold leading-[167%] text-black">
                г. Астана <br /> Акмолинская область
              </h3>
              <hr className="h-[2px] w-[300px] bg-main" />
              <p className="text-center text-[24px] font-semibold leading-[167%] text-black">
                В каталоге 10 126 лотов.
              </p>
              <div className="flex gap-[5px]">
                <p>Сортировать по:</p>
                <div className="flex h-[30px] w-[88px] items-center justify-center gap-[10px] rounded-[6px] bg-[#d8d8d8]">
                  <p className="text-[14px] font-medium leading-[143%] text-[#0f172a]">
                    Сумма
                  </p>
                  <SlArrowDown className="h-[9px] w-[9px]" />
                </div>
              </div>
              <div className="flex h-[142px] w-[315px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-main p-[10px]">
                <p className="w-[267px] text-[14px] font-normal text-[#e6e6e6]">
                  Работы по установке (монтажу) оборудования/приборов учета
                  воды.
                </p>
                <div className="flex w-full justify-between px-[24px]">
                  <div className="flex items-center justify-center gap-[5px]">
                    <FaMoneyCheck className="h-[20px] w-[20px] text-greenl" />
                    <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                      4 730 000
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-[5px]">
                    <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-greenl">
                      Статус:
                    </p>
                    <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                      4 730 000
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[5px]">
                  <FaHandshakeSimple className="h-[12px] w-[20px] text-greenl" />
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
                <p className="text-[12px] font-normal text-white">
                  24.08.2024 - 03.09.2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[31px] mt-[50px] flex w-full justify-center gap-[160px] max-[1410px]:gap-[60px] max-[817px]:flex-col-reverse max-[817px]:items-center">
        <div className="flex w-full max-w-[353px] flex-col items-center gap-[50px]">
          <div className="flex w-full justify-center gap-[15px] max-[1410px]:justify-center">
            <h3 className="text-center text-[40px] font-semibold">Блог</h3>
            <Button
              variant="default"
              className="bg-[#efefef] text-main hover:bg-[#dbdbdb]"
            >
              Открыть
            </Button>
          </div>
          <div className="flex w-full flex-col gap-[15px]">
            <div className="flex w-full">
              <div className="flex flex-col justify-between gap-[9px]">
                <h3 className="text-[24px] font-medium leading-[150%] tracking-[-0.01em] text-[#1c1c1c]">
                  Dream Homes Realty
                </h3>
                <p className="text-[18px] font-normal leading-[150%] text-[#b0b0b0]">
                  Dream Homes Realty wanted an intuitive web portal for
                  showcasing their property listings....{" "}
                  <span className="text-greenl">Read More</span>
                </p>
              </div>
              <div className="flex items-center justify-center self-start rounded-[8px] bg-main p-[10px] transition-[1s] hover:rotate-[45deg]">
                <GoArrowUpRight className="h-[30px] w-[30px] text-white" />
              </div>
            </div>
            <hr className="w-100% h-[2px] bg-main" />
            <div className="flex w-full">
              <div className="flex flex-col justify-between gap-[9px]">
                <h3 className="text-[24px] font-medium leading-[150%] tracking-[-0.01em] text-[#1c1c1c]">
                  Dream Homes Realty
                </h3>
                <p className="text-[18px] font-normal leading-[150%] text-[#b0b0b0]">
                  Dream Homes Realty wanted an intuitive web portal for
                  showcasing their property listings....{" "}
                  <span className="text-greenl">Read More</span>
                </p>
              </div>
              <div className="flex items-center justify-center self-start rounded-[8px] bg-main p-[10px]">
                <GoArrowUpRight className="h-[30px] w-[30px] text-white" />
              </div>
            </div>
            <hr className="w-100% h-[2px] bg-main" />
            <div className="flex w-full">
              <div className="flex flex-col justify-between gap-[9px]">
                <h3 className="text-[24px] font-medium leading-[150%] tracking-[-0.01em] text-[#1c1c1c]">
                  Dream Homes Realty
                </h3>
                <p className="text-[18px] font-normal leading-[150%] text-[#b0b0b0]">
                  Dream Homes Realty wanted an intuitive web portal for
                  showcasing their property listings....{" "}
                  <span className="text-greenl">Read More</span>
                </p>
              </div>
              <div className="flex items-center justify-center self-start rounded-[8px] bg-main p-[10px]">
                <GoArrowUpRight className="h-[30px] w-[30px] text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-[800px] flex-col flex-wrap items-center gap-[50px]">
          <div className="flex w-full items-center justify-start gap-[15px] max-[1410px]:justify-center">
            <h3 className="text-center text-[40px] font-semibold">
              Горящие тендеры
            </h3>
            <Button
              variant="default"
              color="white"
              className="bg-[#efefef] text-main hover:bg-[#dbdbdb]"
            >
              Открыть
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-[20px] max-[1410px]:justify-center">
            <div className="flex h-[142px] w-[315px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-main p-[10px]">
              <p className="w-[267px] text-[14px] font-normal text-[#e6e6e6]">
                Работы по установке (монтажу) оборудования/приборов учета воды.
              </p>
              <div className="flex w-full justify-between px-[24px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <FaMoneyCheck className="h-[20px] w-[20px] text-greenl" />
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-greenl">
                    Статус:
                  </p>
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[5px]">
                <FaHandshakeSimple className="h-[12px] w-[20px] text-greenl" />
                <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                  4 730 000
                </p>
              </div>
              <p className="text-[12px] font-normal text-white">
                24.08.2024 - 03.09.2024
              </p>
            </div>
            <div className="flex h-[142px] w-[315px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-main p-[10px]">
              <p className="w-[267px] text-[14px] font-normal text-[#e6e6e6]">
                Работы по установке (монтажу) оборудования/приборов учета воды.
              </p>
              <div className="flex w-full justify-between px-[24px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <FaMoneyCheck className="h-[20px] w-[20px] text-greenl" />
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-greenl">
                    Статус:
                  </p>
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[5px]">
                <FaHandshakeSimple className="h-[12px] w-[20px] text-greenl" />
                <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                  4 730 000
                </p>
              </div>
              <p className="text-[12px] font-normal text-white">
                24.08.2024 - 03.09.2024
              </p>
            </div>
            <div className="flex h-[142px] w-[315px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-main p-[10px]">
              <p className="w-[267px] text-[14px] font-normal text-[#e6e6e6]">
                Работы по установке (монтажу) оборудования/приборов учета воды.
              </p>
              <div className="flex w-full justify-between px-[24px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <FaMoneyCheck className="h-[20px] w-[20px] text-greenl" />
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-greenl">
                    Статус:
                  </p>
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[5px]">
                <FaHandshakeSimple className="h-[12px] w-[20px] text-greenl" />
                <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                  4 730 000
                </p>
              </div>
              <p className="text-[12px] font-normal text-white">
                24.08.2024 - 03.09.2024
              </p>
            </div>
            <div className="flex h-[142px] w-[315px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-main p-[10px]">
              <p className="w-[267px] text-[14px] font-normal text-[#e6e6e6]">
                Работы по установке (монтажу) оборудования/приборов учета воды.
              </p>
              <div className="flex w-full justify-between px-[24px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <FaMoneyCheck className="h-[20px] w-[20px] text-greenl" />
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-greenl">
                    Статус:
                  </p>
                  <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                    4 730 000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[5px]">
                <FaHandshakeSimple className="h-[12px] w-[20px] text-greenl" />
                <p className="text-[12px] font-medium leading-[150%] tracking-[-0.01em] text-white">
                  4 730 000
                </p>
              </div>
              <p className="text-[12px] font-normal text-white">
                24.08.2024 - 03.09.2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
