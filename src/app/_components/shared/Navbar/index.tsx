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
    ],
  },
  {
    trigger: "Партнерство",
    values: [],
  },
  {
    trigger: "Контрагенты",
    values: [],
  },
  {
    trigger: "Тарифы",
    values: [],
  },
  {
    trigger: "Договоры",
    values: [],
  },
  {
    trigger: "Еще",
    values: [],
  },
];

export default function Navingation() {
  return (
    <div className="flex w-full justify-center">
      <NavigationMenu>
        <NavigationMenuList>
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
