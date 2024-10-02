"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";

interface NavbarComponent {
  trigger: string;
  values: { title: string; href: string; description: string }[];
}

const components: NavbarComponent[] = [
  {
    trigger: "Тендера",
    values: [
      {
        title: "По областям",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
      {
        title: "По площадкам",
        href: "/tenders/by-sites",
        description: "Все тендера по площадкам",
      },
      {
        title: "По категориям",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "По предоплате",
        href: "/tenders/by-categories",
        description: "Все тендера по предоплате",
      },
      {
        title: "Все тендеры Казахстана",
        href: "/tenders/by-categories",
        description: "Все тендера в Казахстане",
      },
      {
        title: "Все тендеры России",
        href: "/tenders/by-categories",
        description: "Все тендера в России",
      },
    ],
  },
  {
    trigger: "Партнерство",
    values: [
      {
        title: "Найти партнера",
        href: "/partnership",
        description: "Поиск партнеров",
      },
      {
        title: "Об услуге",
        href: "/help/partnership",
        description: "Описание системы Партнерства",
      },
    ],
  },
  {
    trigger: "Контрагенты",
    values: [
      {
        title: "Проверить контрагента",
        href: "/organization",
        description: "Проверка имеющийся базы",
      },
      {
        title: "Об услуге",
        href: "/help/organization",
        description: "Описание системы Контрагентов",
      },
    ],
  },
  {
    trigger: "Тарифы",
    values: [
      {
        title: "Тарифы",
        href: "/tenders/by-areas",
        description: "Все про тарифные планы на сайте",
      },
    ],
  },
  {
    trigger: "Планы",
    values: [
      {
        title: "Планы",
        href: "/tenders/by-areas",
        description: "Все про Планы на сайте",
      },
    ],
  },
  {
    trigger: "Договоры",
    values: [
      {
        title: "Договоры",
        href: "/tenders/by-areas",
        description: "База данных по договорам",
      },
      {
        title: "Предметы договоров",
        href: "/tenders/by-sites",
        description: "Данные по предметам из договоров",
      },
      {
        title: "Об услуге",
        href: "/tenders/by-categories",
        description: "Описание системы Договоров",
      },
    ],
  },
  {
    trigger: "Еще",
    values: [
      {
        title: "Аналитика по договорам",
        href: "/tenders/by-areas",
        description: "Доступная аналитика по договорам",
      },
      {
        title: "Аналитика по лотам",
        href: "/tenders/by-sites",
        description: "Доступная аналитика по лотам",
      },
      {
        title: "Блог",
        href: "/blog",
        description: "Наш блог с полезной информацией",
      },
      {
        title: "Помощь по сайту",
        href: "/tenders/by-categories",
        description: "Инструкция пользования сайтом",
      },
      {
        title: "Анкета ЭЦП",
        href: "/anketa_ecp",
        description: "Анкета ЭЦП для заполнения",
      },
      {
        title: "ОКЭД",
        href: "/OKED",
        description: "Данные ОКЭД для вашего пользования",
      },
      {
        title: "ТН ВЭД",
        href: "/",
        description: "Данные ТН ВЭД для вашего пользования",
      },
      {
        title: "КАТО",
        href: "/",
        description: "Данные КАТО для вашего пользования",
      },
    ],
  },
];

export default function Navingation() {
  return (
    <div className="flex w-full justify-center">
      <NavigationMenu>
        <NavigationMenuList className=" flex-wrap">
          {components.map((component) => (
            <NavigationMenuItem key={component.trigger}>
              <NavigationMenuTrigger>{component.trigger}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {component.values.map((subcomponent) => (
                    <ListItem
                      key={subcomponent.title}
                      title={subcomponent.title}
                      href={subcomponent.href}
                    >
                      {subcomponent.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
