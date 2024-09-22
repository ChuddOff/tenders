import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

interface AccordionItemType {
  title: string;
  content: string | AccordionItemType[];
}

interface RecursiveAccordionProps {
  item: AccordionItemType;
  index: number;
  styles?: string;
  margin1?: number;
}

const accordionData: AccordionItemType[] = [
  {
    title: "A - Сельское, лесное и рыбное хозяйство",
    content: [
      {
        title:
          "01 - Растениеводство и животноводство, охота и предоставление услуг в этих областях",
        content: [
          {
            title:
              "01 - Растениеводство и животноводство, охота и предоставление услуг в этих областях",
            content: "No",
          },
          {
            title: "Indirect recursion",
            content:
              "When a function calls another function, which then calls the original function.",
          },
          {
            title: "Nested recursion",
            content: [
              {
                title: "What is nested recursion?",
                content:
                  "Nested recursion occurs when a recursive call is made inside another recursive call.",
              },
              {
                title: "Example",
                content:
                  "The Ackermann function is a classic example of nested recursion.",
              },
            ],
          },
        ],
      },
      {
        title: "Indirect recursion",
        content:
          "When a function calls another function, which then calls the original function.",
      },
      {
        title: "Nested recursion",
        content: [
          {
            title: "What is nested recursion?",
            content:
              "Nested recursion occurs when a recursive call is made inside another recursive call.",
          },
          {
            title: "Example",
            content:
              "The Ackermann function is a classic example of nested recursion.",
          },
        ],
      },
    ],
  },
  {
    title: "Types of recursion",
    content: [
      {
        title: "Direct recursion",
        content: "When a function calls itself directly.",
      },
      {
        title: "Indirect recursion",
        content:
          "When a function calls another function, which then calls the original function.",
      },
      {
        title: "Nested recursion",
        content: [
          {
            title: "What is nested recursion?",
            content:
              "Nested recursion occurs when a recursive call is made inside another recursive call.",
          },
          {
            title: "Example",
            content:
              "The Ackermann function is a classic example of nested recursion.",
          },
        ],
      },
    ],
  },
  {
    title: "When to use recursion?",
    content:
      "Recursion is useful for problems that can be broken down into smaller, similar subproblems.",
  },
];

function RecursiveAccordionItem({
  item,
  index,
  styles,
  margin1,
}: RecursiveAccordionProps) {
  const margin: number = margin1 ?? 0;

  return (
    <AccordionItem value={`item-${index}`} className={`${styles}`}>
      <AccordionTrigger>{item.title}</AccordionTrigger>
      <AccordionContent>
        {typeof item.content === "string" ? (
          item.content
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {item.content.map((subItem, subIndex) => (
              <RecursiveAccordionItem
                margin1={margin}
                key={subIndex}
                item={subItem}
                index={subIndex}
                styles={`ml-[${margin}px]`}
              />
            ))}
          </Accordion>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function Blog() {
  return (
    <div className={`flex w-full flex-col gap-[50px]`}>
      <div className={`flex w-full`}>
        <h1 className="text-[34px] font-bold">
          Справочник ОКЭД
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className={`text-[24px] font-bold`}>
                (что это?)
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <p className="text-sm">
                    ОКЭД - это общий государственный классификатор видов
                    экономической деятельности на уровне пяти знаков,
                    разработанный Комитетом по статистике МНЭ РК и утвержденный
                    Приказом №68-од от 22.02.2019 г..
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </h1>
      </div>
      <div className={"flex w-1/3 flex-col"}>
        <Accordion type="single" collapsible className="w-full">
          {accordionData.map((item, index) => (
            <RecursiveAccordionItem key={index} item={item} index={index} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
