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
        description: "Все тендера по категориям",
      },
      {
        title: "Все тендеры Казахстана",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "Все тендеры России",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
    ],
  },
  {
    trigger: "Партнерство",
    values: [
      {
        title: "Найти партнера",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
      {
        title: "Об услуге",
        href: "/tenders/by-sites",
        description: "Все тендера по площадкам",
      },
    ],
  },
  {
    trigger: "Контрагенты",
    values: [
      {
        title: "Проверить контрагента",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
      {
        title: "Об услуге",
        href: "/tenders/by-sites",
        description: "Все тендера по площадкам",
      },
    ],
  },
  {
    trigger: "Тарифы",
    values: [
      {
        title: "Тендеры",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
      {
        title: "Контрагенты",
        href: "/tenders/by-sites",
        description: "Все тендера по площадкам",
      },
      {
        title: "Договоры",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "Нерезиденты",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "Обучение",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "ПКО",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "Дополнительные услуги",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "Реклама на сайте",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
    ],
  },
  {
    trigger: "Планы",
    values: [
      {
        title: "Планы",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
    ],
  },
  {
    trigger: "Договоры",
    values: [
      {
        title: "Договоры",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
      {
        title: "Предметы договоров",
        href: "/tenders/by-sites",
        description: "Все тендера по площадкам",
      },
      {
        title: "Об услуге",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
    ],
  },
  {
    trigger: "Еще",
    values: [
      {
        title: "Аналитика по договорам",
        href: "/tenders/by-areas",
        description: "Все тендера по областям Казахстана",
      },
      {
        title: "Аналитика по лотам",
        href: "/tenders/by-sites",
        description: "Все тендера по площадкам",
      },
      {
        title: "Блог",
        href: "/blog",
        description: "Все тендера по категориям",
      },
      {
        title: "Помощь по сайту",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "Анкета ЭЦП",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "ОКЭД",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "ТН ВЭД",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
      },
      {
        title: "КАТО",
        href: "/tenders/by-categories",
        description: "Все тендера по категориям",
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
