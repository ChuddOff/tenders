"use client";

import {Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import TenderCard from "@/app/_components/shared/TenderCard";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  { month: "Мангистауская область", desktop: 99, mobile: 80 },
  { month: "г. Астана и Акмолинская область", desktop: 99, mobile: 200 },
  { month: "г. Алматы и Алматинская область", desktop: 99, mobile: 120 },
  { month: "Атырауская область", desktop: 50, mobile: 190 },
  { month: "г. Шымкент и Туркстанская область (ЮКО)", desktop: 42, mobile: 130 },
  { month: "Карагандинская область", desktop: 36, mobile: 140 },
  { month: "Павлодарская область", desktop: 33, mobile: 80 },
  { month: "Костанайская область", desktop: 31, mobile: 200 },
  { month: "Западно-Казахстанская область (ЗКО)", desktop: 30, mobile: 120 },
  { month: "Кызылординская область", desktop: 27, mobile: 190 },
  { month: "Жамбылская область", desktop: 27, mobile: 130 },
  { month: "Актюбинская область", desktop: 25, mobile: 140 },
  { month: "Жетысуская область", desktop: 21, mobile: 80 },
  { month: "Северо-Казахстанская область (СКО)", desktop: 17, mobile: 200 },
  { month: "Восточно-Казахстанская область (ВКО)", desktop: 17, mobile: 120 },
  { month: "Улытауская область", desktop: 9, mobile: 190 },
  { month: "Абайская область", desktop: 8, mobile: 130 },
]

const chartConfig = {
  desktop: {
    label: "млдр.",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-[20px]">
      <h1 className="text-[34px] font-bold text-black">
        Тендеры по области Казахстана
      </h1>
      <h2 className="max-w-[418px] text-[18px] font-semibold text-black">
        Выберите нужную вам область, чтобы посмотреть тендерыв по этой области
      </h2>
      <ul className="flex w-full flex-wrap justify-between gap-[20px]">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <li
              className="flex w-full max-w-[400px] items-center justify-between"
              key={index}
            >
              <div className="flex items-center gap-[10px]">
                <div className="h-[10px] w-[10px] rounded-full bg-greenl" />
                <p className="text-[18px] font-normal text-black">
                  Абайская область
                </p>
              </div>

              <p className="text-[18px] font-normal text-black">3548</p>
            </li>
          ))}
      </ul>
      <Card className={`w-full`}>
        <CardHeader>
          <CardTitle>График</CardTitle>
          <CardDescription>Общая сумма тендеров по областям</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                  right: 16,
                }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  hide
              />
              <XAxis dataKey="desktop" type="number" hide />
              <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                  dataKey="desktop"
                  layout="vertical"
                  fill="var(--color-desktop)"
                  radius={8}
              >
                <LabelList
                    dataKey="month"
                    position="insideLeft"
                    offset={8}
                    className="fill-[--color-label]"
                    fontSize={12}
                />
                <LabelList
                    dataKey="desktop"
                    position="right"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {Array.from({ length: 15 }).map((_, i) => (
          <TenderCard
              key={i}
              titleClassname="max-w-80%"
              className="bg-main px-5 py-3 text-white"
              showCheckbox={false}
              showPinStar={false}
              showPlacment={false}
              showLeftDays={false}
              showStatus={false}
          />
      ))}
    </div>
  );
}
