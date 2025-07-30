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
  { date: "2025-04-01", incomes: 222, expenses: 150 },
  { date: "2025-04-02", incomes: 97, expenses: 180 },
  { date: "2025-04-03", incomes: 167, expenses: 120 },
  { date: "2025-04-04", incomes: 242, expenses: 260 },
  { date: "2025-04-05", incomes: 373, expenses: 290 },
  { date: "2025-04-06", incomes: 301, expenses: 340 },
  { date: "2025-04-07", incomes: 245, expenses: 180 },
  { date: "2025-04-08", incomes: 409, expenses: 320 },
  { date: "2025-04-09", incomes: 59, expenses: 110 },
  { date: "2025-04-10", incomes: 261, expenses: 190 },
  { date: "2025-04-11", incomes: 327, expenses: 350 },
  { date: "2025-04-12", incomes: 292, expenses: 210 },
  { date: "2025-04-13", incomes: 342, expenses: 380 },
  { date: "2025-04-14", incomes: 137, expenses: 220 },
  { date: "2025-04-15", incomes: 120, expenses: 170 },
  { date: "2025-04-16", incomes: 138, expenses: 190 },
  { date: "2025-04-17", incomes: 446, expenses: 360 },
  { date: "2025-04-18", incomes: 364, expenses: 410 },
  { date: "2025-04-19", incomes: 243, expenses: 180 },
  { date: "2025-04-20", incomes: 89, expenses: 150 },
  { date: "2025-04-21", incomes: 137, expenses: 200 },
  { date: "2025-04-22", incomes: 224, expenses: 170 },
  { date: "2025-04-23", incomes: 138, expenses: 230 },
  { date: "2025-04-24", incomes: 387, expenses: 290 },
  { date: "2025-04-25", incomes: 215, expenses: 250 },
  { date: "2025-04-26", incomes: 75, expenses: 130 },
  { date: "2025-04-27", incomes: 383, expenses: 420 },
  { date: "2025-04-28", incomes: 122, expenses: 180 },
  { date: "2025-04-29", incomes: 315, expenses: 240 },
  { date: "2025-04-30", incomes: 454, expenses: 380 },
  { date: "2025-05-01", incomes: 165, expenses: 220 },
  { date: "2025-05-02", incomes: 293, expenses: 310 },
  { date: "2025-05-03", incomes: 247, expenses: 190 },
  { date: "2025-05-04", incomes: 385, expenses: 420 },
  { date: "2025-05-05", incomes: 481, expenses: 390 },
  { date: "2025-05-06", incomes: 498, expenses: 520 },
  { date: "2025-05-07", incomes: 388, expenses: 300 },
  { date: "2025-05-08", incomes: 149, expenses: 210 },
  { date: "2025-05-09", incomes: 227, expenses: 180 },
  { date: "2025-05-10", incomes: 293, expenses: 330 },
  { date: "2025-05-11", incomes: 335, expenses: 270 },
  { date: "2025-05-12", incomes: 197, expenses: 240 },
  { date: "2025-05-13", incomes: 197, expenses: 160 },
  { date: "2025-05-14", incomes: 448, expenses: 490 },
  { date: "2025-05-15", incomes: 473, expenses: 380 },
  { date: "2025-05-16", incomes: 338, expenses: 400 },
  { date: "2025-05-17", incomes: 499, expenses: 420 },
  { date: "2025-05-18", incomes: 315, expenses: 350 },
  { date: "2025-05-19", incomes: 235, expenses: 180 },
  { date: "2025-05-20", incomes: 177, expenses: 230 },
  { date: "2025-05-21", incomes: 82, expenses: 140 },
  { date: "2025-05-22", incomes: 81, expenses: 120 },
  { date: "2025-05-23", incomes: 252, expenses: 290 },
  { date: "2025-05-24", incomes: 294, expenses: 220 },
  { date: "2025-05-25", incomes: 201, expenses: 250 },
  { date: "2025-05-26", incomes: 213, expenses: 170 },
  { date: "2025-05-27", incomes: 420, expenses: 460 },
  { date: "2025-05-28", incomes: 233, expenses: 190 },
  { date: "2025-05-29", incomes: 78, expenses: 130 },
  { date: "2025-05-30", incomes: 340, expenses: 280 },
  { date: "2025-05-31", incomes: 178, expenses: 230 },
  { date: "2025-06-01", incomes: 178, expenses: 200 },
  { date: "2025-06-02", incomes: 470, expenses: 410 },
  { date: "2025-06-03", incomes: 103, expenses: 160 },
  { date: "2025-06-04", incomes: 439, expenses: 380 },
  { date: "2025-06-05", incomes: 88, expenses: 140 },
  { date: "2025-06-06", incomes: 294, expenses: 250 },
  { date: "2025-06-07", incomes: 323, expenses: 370 },
  { date: "2025-06-08", incomes: 385, expenses: 320 },
  { date: "2025-06-09", incomes: 438, expenses: 480 },
  { date: "2025-06-10", incomes: 155, expenses: 200 },
  { date: "2025-06-11", incomes: 92, expenses: 150 },
  { date: "2025-06-12", incomes: 492, expenses: 420 },
  { date: "2025-06-13", incomes: 81, expenses: 130 },
  { date: "2025-06-14", incomes: 426, expenses: 380 },
  { date: "2025-06-15", incomes: 307, expenses: 350 },
  { date: "2025-06-16", incomes: 371, expenses: 310 },
  { date: "2025-06-17", incomes: 475, expenses: 520 },
  { date: "2025-06-18", incomes: 107, expenses: 170 },
  { date: "2025-06-19", incomes: 341, expenses: 290 },
  { date: "2025-06-20", incomes: 408, expenses: 450 },
  { date: "2025-06-21", incomes: 169, expenses: 210 },
  { date: "2025-06-22", incomes: 317, expenses: 270 },
  { date: "2025-06-23", incomes: 480, expenses: 530 },
  { date: "2025-06-24", incomes: 132, expenses: 180 },
  { date: "2025-06-25", incomes: 141, expenses: 190 },
  { date: "2025-06-26", incomes: 434, expenses: 380 },
  { date: "2025-06-27", incomes: 448, expenses: 490 },
  { date: "2025-06-28", incomes: 149, expenses: 200 },
  { date: "2025-06-29", incomes: 103, expenses: 160 },
  { date: "2025-06-30", incomes: 446, expenses: 400 },
]

const chartConfig = {
  incomes: {
    label: "Incomes",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
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
              Showing total incomes and expenses for the selected period
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
                <linearGradient id="fillexpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--tw-color-expenses)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--tw-color-expenses)"
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
                dataKey="expenses"
                type="natural"
                fill="url(#fillexpenses)"
                stroke="var(--tw-color-expenses)"
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