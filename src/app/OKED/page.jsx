import React from "react";
import fs from 'fs';
import path from 'path';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {Button} from "@/components/ui/button";


const filePath = path.join(``, 'ОКЭД.json');
let dataa

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const jsonData = JSON.parse(data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        dataa = jsonData
        const jsonString = JSON.stringify(jsonData, null, 2); // null, 2 для красивого форматирования
        console.log('Read and stringified JSON data:', jsonString);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

const accordionData = [
    {
        title: "A - Сельское, лесное и рыбное хозяйство",
        content: [
            {
                title: "01 - Растениеводство и животноводство, охота и предоставление услуг в этих областях",
                content: [
                    {
                        title: "01 - Растениеводство и животноводство, охота и предоставление услуг в этих областях",
                        content: "No"
                    },
                    {
                        title: "Indirect recursion",
                        content: "When a function calls another function, which then calls the original function."
                    },
                    {
                        title: "Nested recursion",
                        content: [
                            {
                                title: "What is nested recursion?",
                                content: "Nested recursion occurs when a recursive call is made inside another recursive call."
                            },
                            {
                                title: "Example",
                                content: "The Ackermann function is a classic example of nested recursion."
                            }
                        ]
                    }
                ]
            },
            {
                title: "Indirect recursion",
                content: "When a function calls another function, which then calls the original function."
            },
            {
                title: "Nested recursion",
                content: [
                    {
                        title: "What is nested recursion?",
                        content: "Nested recursion occurs when a recursive call is made inside another recursive call."
                    },
                    {
                        title: "Example",
                        content: "The Ackermann function is a classic example of nested recursion."
                    }
                ]
            }
        ]
    },
    {
        title: "Types of recursion",
        content: [
            {
                title: "Direct recursion",
                content: "When a function calls itself directly."
            },
            {
                title: "Indirect recursion",
                content: "When a function calls another function, which then calls the original function."
            },
            {
                title: "Nested recursion",
                content: [
                    {
                        title: "What is nested recursion?",
                        content: "Nested recursion occurs when a recursive call is made inside another recursive call."
                    },
                    {
                        title: "Example",
                        content: "The Ackermann function is a classic example of nested recursion."
                    }
                ]
            }
        ]
    },
    {
        title: "When to use recursion?",
        content: "Recursion is useful for problems that can be broken down into smaller, similar subproblems."
    }
];

function RecursiveAccordionItem({ item, index, styles, margin1}) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let margin  = margin1 ?? 0;
    margin += 50
    return (
        <AccordionItem value={`item-${index}`} className={`${styles}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
                {typeof item.content === 'string' ? (
                    item.content
                ) : (
                    <Accordion type="single" collapsible className="w-full">
                        {item.content.map((subItem, subIndex) => (
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            <RecursiveAccordionItem margin1={margin} key={subIndex} item={subItem} index={subIndex} styles={`ml-[${margin}px]`}/>
                        ))}
                    </Accordion>
                )}
            </AccordionContent>
        </AccordionItem>
    );
}

export default function Blog() {

    return (
        <div className={`w-full flex flex-col gap-[50px]`}>
            <div className={`w-full flex`}>
                <h1 className="text-[34px] font-bold">
                    Справочник ОКЭД
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="link" className={`text-[24px] font-bold`}>(что это?)</Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                    <p className="text-sm">
                                        ОКЭД - это общий государственный классификатор видов экономической деятельности на уровне пяти знаков, разработанный Комитетом по статистике МНЭ РК и утвержденный Приказом №68-од от 22.02.2019 г..
                                    </p>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>


                </h1>
            </div>
                <div className={`w-1/2 flex flex-col`}>
                    <Accordion type="single" collapsible className="w-full">
                        {accordionData.map((item, index) => (
                            <RecursiveAccordionItem key={index} item={item} index={index} />
                        ))}
                    </Accordion>
                        {/*dataa?.massive.map((item) => {
                            return (
                                <p key={1}>{item.Column1}</p>
                            )
                        })*/}
                </div>
        </div>
    );
}