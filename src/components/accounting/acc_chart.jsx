import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2025-04-01", incomes: 222, outcomes: 150 },
  { date: "2025-04-02", incomes: 97, outcomes: 180 },
  { date: "2025-04-03", incomes: 167, outcomes: 120 },
  { date: "2025-04-04", incomes: 242, outcomes: 260 },
  { date: "2025-04-05", incomes: 373, outcomes: 290 },
  { date: "2025-04-06", incomes: 301, outcomes: 340 },
  { date: "2025-04-07", incomes: 245, outcomes: 180 },
  { date: "2025-04-08", incomes: 409, outcomes: 320 },
  { date: "2025-04-09", incomes: 59, outcomes: 110 },
  { date: "2025-04-10", incomes: 261, outcomes: 190 },
  { date: "2025-04-11", incomes: 327, outcomes: 350 },
  { date: "2025-04-12", incomes: 292, outcomes: 210 },
  { date: "2025-04-13", incomes: 342, outcomes: 380 },
  { date: "2025-04-14", incomes: 137, outcomes: 220 },
  { date: "2025-04-15", incomes: 120, outcomes: 170 },
  { date: "2025-04-16", incomes: 138, outcomes: 190 },
  { date: "2025-04-17", incomes: 446, outcomes: 360 },
  { date: "2025-04-18", incomes: 364, outcomes: 410 },
  { date: "2025-04-19", incomes: 243, outcomes: 180 },
  { date: "2025-04-20", incomes: 89, outcomes: 150 },
  { date: "2025-04-21", incomes: 137, outcomes: 200 },
  { date: "2025-04-22", incomes: 224, outcomes: 170 },
  { date: "2025-04-23", incomes: 138, outcomes: 230 },
  { date: "2025-04-24", incomes: 387, outcomes: 290 },
  { date: "2025-04-25", incomes: 215, outcomes: 250 },
  { date: "2025-04-26", incomes: 75, outcomes: 130 },
  { date: "2025-04-27", incomes: 383, outcomes: 420 },
  { date: "2025-04-28", incomes: 122, outcomes: 180 },
  { date: "2025-04-29", incomes: 315, outcomes: 240 },
  { date: "2025-04-30", incomes: 454, outcomes: 380 },
  { date: "2025-05-01", incomes: 165, outcomes: 220 },
  { date: "2025-05-02", incomes: 293, outcomes: 310 },
  { date: "2025-05-03", incomes: 247, outcomes: 190 },
  { date: "2025-05-04", incomes: 385, outcomes: 420 },
  { date: "2025-05-05", incomes: 481, outcomes: 390 },
  { date: "2025-05-06", incomes: 498, outcomes: 520 },
  { date: "2025-05-07", incomes: 388, outcomes: 300 },
  { date: "2025-05-08", incomes: 149, outcomes: 210 },
  { date: "2025-05-09", incomes: 227, outcomes: 180 },
  { date: "2025-05-10", incomes: 293, outcomes: 330 },
  { date: "2025-05-11", incomes: 335, outcomes: 270 },
  { date: "2025-05-12", incomes: 197, outcomes: 240 },
  { date: "2025-05-13", incomes: 197, outcomes: 160 },
  { date: "2025-05-14", incomes: 448, outcomes: 490 },
  { date: "2025-05-15", incomes: 473, outcomes: 380 },
  { date: "2025-05-16", incomes: 338, outcomes: 400 },
  { date: "2025-05-17", incomes: 499, outcomes: 420 },
  { date: "2025-05-18", incomes: 315, outcomes: 350 },
  { date: "2025-05-19", incomes: 235, outcomes: 180 },
  { date: "2025-05-20", incomes: 177, outcomes: 230 },
  { date: "2025-05-21", incomes: 82, outcomes: 140 },
  { date: "2025-05-22", incomes: 81, outcomes: 120 },
  { date: "2025-05-23", incomes: 252, outcomes: 290 },
  { date: "2025-05-24", incomes: 294, outcomes: 220 },
  { date: "2025-05-25", incomes: 201, outcomes: 250 },
  { date: "2025-05-26", incomes: 213, outcomes: 170 },
  { date: "2025-05-27", incomes: 420, outcomes: 460 },
  { date: "2025-05-28", incomes: 233, outcomes: 190 },
  { date: "2025-05-29", incomes: 78, outcomes: 130 },
  { date: "2025-05-30", incomes: 340, outcomes: 280 },
  { date: "2025-05-31", incomes: 178, outcomes: 230 },
  { date: "2025-06-01", incomes: 178, outcomes: 200 },
  { date: "2025-06-02", incomes: 470, outcomes: 410 },
  { date: "2025-06-03", incomes: 103, outcomes: 160 },
  { date: "2025-06-04", incomes: 439, outcomes: 380 },
  { date: "2025-06-05", incomes: 88, outcomes: 140 },
  { date: "2025-06-06", incomes: 294, outcomes: 250 },
  { date: "2025-06-07", incomes: 323, outcomes: 370 },
  { date: "2025-06-08", incomes: 385, outcomes: 320 },
  { date: "2025-06-09", incomes: 438, outcomes: 480 },
  { date: "2025-06-10", incomes: 155, outcomes: 200 },
  { date: "2025-06-11", incomes: 92, outcomes: 150 },
  { date: "2025-06-12", incomes: 492, outcomes: 420 },
  { date: "2025-06-13", incomes: 81, outcomes: 130 },
  { date: "2025-06-14", incomes: 426, outcomes: 380 },
  { date: "2025-06-15", incomes: 307, outcomes: 350 },
  { date: "2025-06-16", incomes: 371, outcomes: 310 },
  { date: "2025-06-17", incomes: 475, outcomes: 520 },
  { date: "2025-06-18", incomes: 107, outcomes: 170 },
  { date: "2025-06-19", incomes: 341, outcomes: 290 },
  { date: "2025-06-20", incomes: 408, outcomes: 450 },
  { date: "2025-06-21", incomes: 169, outcomes: 210 },
  { date: "2025-06-22", incomes: 317, outcomes: 270 },
  { date: "2025-06-23", incomes: 480, outcomes: 530 },
  { date: "2025-06-24", incomes: 132, outcomes: 180 },
  { date: "2025-06-25", incomes: 141, outcomes: 190 },
  { date: "2025-06-26", incomes: 434, outcomes: 380 },
  { date: "2025-06-27", incomes: 448, outcomes: 490 },
  { date: "2025-06-28", incomes: 149, outcomes: 200 },
  { date: "2025-06-29", incomes: 103, outcomes: 160 },
  { date: "2025-06-30", incomes: 446, outcomes: 400 },
]

const chartConfig = {
  incomes: {
    label: "Incomes",
    color: "var(--chart-1)",
  },
  outcomes: {
    label: "Outcomes",
    color: "var(--chart-3)",
  },
}

export const Sales_Chart = () => {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <div className="mx-5 mt-5">
      <Card className="pt-0">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle>Timeline</CardTitle>
            <CardDescription>
              Showing total incomes and outcomes for the selected period
            </CardDescription>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[240px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillIncomes" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--tw-color-incomes)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--tw-color-incomes)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillOutcomes" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--tw-color-outcomes)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--tw-color-outcomes)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="outcomes"
                type="natural"
                fill="url(#fillOutcomes)"
                stroke="var(--tw-color-outcomes)"
                stackId="a"
              />
              <Area
                dataKey="incomes"
                type="natural"
                fill="url(#fillIncomes)"
                stroke="var(--tw-color-incomes)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}


export default Sales_Chart;