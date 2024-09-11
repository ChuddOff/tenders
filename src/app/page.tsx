import { SlArrowDown } from "react-icons/sl";
import React from "react";

import "../styles/globals.css";
import { Button } from "@/components/ui/button";
import BlogItem from "./_components/home/BlogItem";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BiSolidShieldAlt2 } from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import TenderCard from "./_components/shared/TenderCard";
import GeomapTenderCard from "./_components/home/GeomapTenderCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const howItWorksCards = [
    {
      num: "01",
      title: "Бесплатно зарегистрируйтесь",
      description: `
      Создайте аккаунт для своей компании, это займет всего пару минут
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim`,
    },
    {
      num: "02",
      title: "Получите личного менеджера",
      description: `
        Он поможет вам настроить параметры рассылки в Личном кабинете и
              будет консультировать вас по всем вопросам Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
      `,
    },
    {
      num: "03",
      title: "Выигрывайте заказы и тендеры",
      description: `
      Он поможет вам настроить параметры рассылки в Личном кабинете и
              будет консультировать вас по всем вопросам Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
      `,
    },
  ];

  const service: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Прохождение ПКО",
      description: `
       Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys. 
      `,
      icon: <IoCloudUploadOutline size={33} />,
    },
    {
      title: "Прохождение ПКО",
      description:
        "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
      icon: <FaBalanceScaleRight size={33} />,
    },
    {
      title: "Проверка контрагентов",
      description:
        "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
      icon: <BiSolidShieldAlt2 size={33} />,
    },
  ];

  const carouselItems: string[] = [
    "/carousel/1.png",
    "/carousel/2.png",
    "/carousel/3.png",
    "/carousel/4.png",
    "/carousel/5.png",
  ];

  return (
    <main className="w-full">
      <Carousel className="mt-[50px] max-h-[670px] w-full">
        <CarouselContent className="max-h-[670px]">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="max-h-[670px]">
              <div className="p-0">
                <Card className="h-[656px] w-full overflow-hidden p-0">
                  <CardContent className="flex aspect-square h-full w-full items-center justify-center p-0">
                    <Image src={item} alt="test" width={1500} height={1500} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-[50px] flex w-full flex-col items-center gap-[50px]">
        {/* How it works */}

        <div className="flex w-full items-center justify-center gap-[30px] max-[464px]:gap-[15px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center font-comfortaa text-xl font-semibold">
            Как это работает
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        </div>

        <div className="grid grid-cols-3 max-[700px]:w-full max-[700px]:grid-cols-1 max-[700px]:gap-y-14">
          {howItWorksCards.map((card) => (
            <section key={card.num} className={`w-full px-5 max-md:col-span-1`}>
              <div className="max-[700px]: mb-3 flex items-end gap-[24px]">
                <p className="h-[50.8px] align-top text-6xl font-semibold leading-[42.8px] max-[903px]:hidden max-[700px]:block">
                  {card.num}
                </p>

                <div className="flex flex-col self-start border-b border-black pb-3 max-[700px]:border-none max-[700px]:pb-0">
                  <p className="max-w-[200px] text-lg font-semibold leading-[21px] text-main">
                    {card.title}
                  </p>
                </div>
              </div>
              <h4 className="max-w-[280px] text-sm font-normal leading-[150%] text-[#777] max-[700px]:max-w-full">
                {card.description}
              </h4>
            </section>
          ))}
        </div>
      </div>

      {/* Services */}

      <div className="mt-[50px] flex w-full flex-col items-center gap-[50px]">
        <div className="flex w-full items-center justify-center gap-[30px] max-[464px]:gap-[15px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center font-comfortaa text-xl font-semibold">
            Услуги
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        </div>

        <div className="grid grid-cols-3 max-[700px]:w-full max-[700px]:grid-cols-1 max-[700px]:gap-y-14">
          {service.map((card) => (
            <section
              key={card.title}
              className={`w-full px-5 max-md:col-span-1`}
            >
              <div className="mb-7 w-max rounded border border-black p-4 max-[950px]:mx-auto">
                {card.icon}
              </div>
              <div className="flex flex-col self-start pb-3">
                <p className="text-lg font-semibold leading-[21px] text-main max-[700px]:text-center">
                  {card.title}
                </p>
              </div>
              <h4 className="mb-5 max-w-[280px] text-sm font-normal leading-[150%] text-[#777] max-[700px]:max-w-full max-[700px]:text-center">
                {card.description}
              </h4>
              <Button className="w-full">Apply now</Button>
            </section>
          ))}
        </div>
      </div>

      {/* Work with us */}
      {/* <div className="mt-[50px] flex w-full flex-col items-center gap-[50px]">
        <div className="flex w-full items-center justify-center gap-[30px] max-[464px]:gap-[15px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center font-comfortaa text-xl font-semibold">
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
      </div> */}

      {/* Map */}

      <div className="mt-[50px] flex w-full flex-col items-center gap-[50px]">
        <div className="flex w-full items-center justify-center gap-[30px] max-[464px]:gap-[15px]">
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
          <h3 className="whitespace-nowrap text-center font-comfortaa text-xl font-semibold">
            Геокарта тендеров
          </h3>
          <hr className="h-[2px] w-full max-w-[300px] bg-main" />
        </div>

        <div className="flex items-center justify-center gap-[25px] max-[1410px]:flex-col">
          {/* Map */}
          <div></div>

          {/* Map right item */}
          <div className="relative max-w-[365px] rounded-[20px] bg-[rgba(217,217,217,0.41)]">
            <div className="-z-1 absolute right-0 h-[200px] w-[200px] rounded-full bg-main blur-[100px]" />
            <div className="-z-1 absolute bottom-0 h-[200px] w-[200px] rounded-full bg-main blur-[100px]" />
            <div className="relative z-10 flex flex-col items-center justify-start gap-[25px] p-[20px_30px] max-[700px]:p-[20px_10px]">
              <h3 className="text-center text-[24px] font-semibold leading-[167%] text-black">
                г. Астана <br /> Акмолинская область
              </h3>
              <hr className="h-[2px] w-[300px] bg-main" />
              <p className="text-center text-[24px] font-semibold leading-[167%] text-black">
                В каталоге 10 126 лотов.
              </p>
              <div className="flex items-center gap-1">
                <p>Сортировать по:</p>
                <div className="flex items-center gap-[10px] rounded-[6px] bg-[#D8D8D8] px-2 py-1">
                  <p className="text-[14px] font-medium leading-[143%] text-[#0f172a]">
                    Сумма
                  </p>
                  <SlArrowDown size={9} />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <GeomapTenderCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-center gap-14 max-[1060px]:flex-col max-[1060px]:items-center">
        {/* Blog item */}

        <div>
          <h1 className="mb-4 font-comfortaa text-3xl font-semibold max-[1060px]:text-center">
            Блог
          </h1>
          <div className="flex flex-col gap-10 max-[1060px]:flex-row max-[1060px]:px-11 max-[700px]:flex-col">
            {Array.from({ length: 3 }).map((_, i) => (
              <BlogItem key={i} />
            ))}
          </div>
        </div>

        {/* Hot tenders */}
        <div className="flex flex-col justify-center max-[700px]:w-full">
          <h1 className="mb-4 text-center font-comfortaa text-3xl font-semibold">
            Горячие тендеры
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 max-[700px]:grid-cols-1 max-[700px]:grid-rows-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <TenderCard
                key={i}
                titleClassname=" max-w-[200px]"
                className="bg-main px-5 py-3 text-white"
                showCheckbox={false}
                showPinStar={false}
                showPlacment={false}
                showLeftDays={false}
                showStatus={false}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
