"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

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
      <Card className="w-full max-w-[500px]">
        <CardHeader>
          <CardTitle>Bar Chart - Mixed</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="browser"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="visitors" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="visitors" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
