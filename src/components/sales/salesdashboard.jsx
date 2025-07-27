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
  { date: "2025-04-01", online_sales: 222, in_store_sales: 150 },
  { date: "2025-04-02", online_sales: 97, in_store_sales: 180 },
  { date: "2025-04-03", online_sales: 167, in_store_sales: 120 },
  { date: "2025-04-04", online_sales: 242, in_store_sales: 260 },
  { date: "2025-04-05", online_sales: 373, in_store_sales: 290 },
  { date: "2025-04-06", online_sales: 301, in_store_sales: 340 },
  { date: "2025-04-07", online_sales: 245, in_store_sales: 180 },
  { date: "2025-04-08", online_sales: 409, in_store_sales: 320 },
  { date: "2025-04-09", online_sales: 59, in_store_sales: 110 },
  { date: "2025-04-10", online_sales: 261, in_store_sales: 190 },
  { date: "2025-04-11", online_sales: 327, in_store_sales: 350 },
  { date: "2025-04-12", online_sales: 292, in_store_sales: 210 },
  { date: "2025-04-13", online_sales: 342, in_store_sales: 380 },
  { date: "2025-04-14", online_sales: 137, in_store_sales: 220 },
  { date: "2025-04-15", online_sales: 120, in_store_sales: 170 },
  { date: "2025-04-16", online_sales: 138, in_store_sales: 190 },
  { date: "2025-04-17", online_sales: 446, in_store_sales: 360 },
  { date: "2025-04-18", online_sales: 364, in_store_sales: 410 },
  { date: "2025-04-19", online_sales: 243, in_store_sales: 180 },
  { date: "2025-04-20", online_sales: 89, in_store_sales: 150 },
  { date: "2025-04-21", online_sales: 137, in_store_sales: 200 },
  { date: "2025-04-22", online_sales: 224, in_store_sales: 170 },
  { date: "2025-04-23", online_sales: 138, in_store_sales: 230 },
  { date: "2025-04-24", online_sales: 387, in_store_sales: 290 },
  { date: "2025-04-25", online_sales: 215, in_store_sales: 250 },
  { date: "2025-04-26", online_sales: 75, in_store_sales: 130 },
  { date: "2025-04-27", online_sales: 383, in_store_sales: 420 },
  { date: "2025-04-28", online_sales: 122, in_store_sales: 180 },
  { date: "2025-04-29", online_sales: 315, in_store_sales: 240 },
  { date: "2025-04-30", online_sales: 454, in_store_sales: 380 },
  { date: "2025-05-01", online_sales: 165, in_store_sales: 220 },
  { date: "2025-05-02", online_sales: 293, in_store_sales: 310 },
  { date: "2025-05-03", online_sales: 247, in_store_sales: 190 },
  { date: "2025-05-04", online_sales: 385, in_store_sales: 420 },
  { date: "2025-05-05", online_sales: 481, in_store_sales: 390 },
  { date: "2025-05-06", online_sales: 498, in_store_sales: 520 },
  { date: "2025-05-07", online_sales: 388, in_store_sales: 300 },
  { date: "2025-05-08", online_sales: 149, in_store_sales: 210 },
  { date: "2025-05-09", online_sales: 227, in_store_sales: 180 },
  { date: "2025-05-10", online_sales: 293, in_store_sales: 330 },
  { date: "2025-05-11", online_sales: 335, in_store_sales: 270 },
  { date: "2025-05-12", online_sales: 197, in_store_sales: 240 },
  { date: "2025-05-13", online_sales: 197, in_store_sales: 160 },
  { date: "2025-05-14", online_sales: 448, in_store_sales: 490 },
  { date: "2025-05-15", online_sales: 473, in_store_sales: 380 },
  { date: "2025-05-16", online_sales: 338, in_store_sales: 400 },
  { date: "2025-05-17", online_sales: 499, in_store_sales: 420 },
  { date: "2025-05-18", online_sales: 315, in_store_sales: 350 },
  { date: "2025-05-19", online_sales: 235, in_store_sales: 180 },
  { date: "2025-05-20", online_sales: 177, in_store_sales: 230 },
  { date: "2025-05-21", online_sales: 82, in_store_sales: 140 },
  { date: "2025-05-22", online_sales: 81, in_store_sales: 120 },
  { date: "2025-05-23", online_sales: 252, in_store_sales: 290 },
  { date: "2025-05-24", online_sales: 294, in_store_sales: 220 },
  { date: "2025-05-25", online_sales: 201, in_store_sales: 250 },
  { date: "2025-05-26", online_sales: 213, in_store_sales: 170 },
  { date: "2025-05-27", online_sales: 420, in_store_sales: 460 },
  { date: "2025-05-28", online_sales: 233, in_store_sales: 190 },
  { date: "2025-05-29", online_sales: 78, in_store_sales: 130 },
  { date: "2025-05-30", online_sales: 340, in_store_sales: 280 },
  { date: "2025-05-31", online_sales: 178, in_store_sales: 230 },
  { date: "2025-06-01", online_sales: 178, in_store_sales: 200 },
  { date: "2025-06-02", online_sales: 470, in_store_sales: 410 },
  { date: "2025-06-03", online_sales: 103, in_store_sales: 160 },
  { date: "2025-06-04", online_sales: 439, in_store_sales: 380 },
  { date: "2025-06-05", online_sales: 88, in_store_sales: 140 },
  { date: "2025-06-06", online_sales: 294, in_store_sales: 250 },
  { date: "2025-06-07", online_sales: 323, in_store_sales: 370 },
  { date: "2025-06-08", online_sales: 385, in_store_sales: 320 },
  { date: "2025-06-09", online_sales: 438, in_store_sales: 480 },
  { date: "2025-06-10", online_sales: 155, in_store_sales: 200 },
  { date: "2025-06-11", online_sales: 92, in_store_sales: 150 },
  { date: "2025-06-12", online_sales: 492, in_store_sales: 420 },
  { date: "2025-06-13", online_sales: 81, in_store_sales: 130 },
  { date: "2025-06-14", online_sales: 426, in_store_sales: 380 },
  { date: "2025-06-15", online_sales: 307, in_store_sales: 350 },
  { date: "2025-06-16", online_sales: 371, in_store_sales: 310 },
  { date: "2025-06-17", online_sales: 475, in_store_sales: 520 },
  { date: "2025-06-18", online_sales: 107, in_store_sales: 170 },
  { date: "2025-06-19", online_sales: 341, in_store_sales: 290 },
  { date: "2025-06-20", online_sales: 408, in_store_sales: 450 },
  { date: "2025-06-21", online_sales: 169, in_store_sales: 210 },
  { date: "2025-06-22", online_sales: 317, in_store_sales: 270 },
  { date: "2025-06-23", online_sales: 480, in_store_sales: 530 },
  { date: "2025-06-24", online_sales: 132, in_store_sales: 180 },
  { date: "2025-06-25", online_sales: 141, in_store_sales: 190 },
  { date: "2025-06-26", online_sales: 434, in_store_sales: 380 },
  { date: "2025-06-27", online_sales: 448, in_store_sales: 490 },
  { date: "2025-06-28", online_sales: 149, in_store_sales: 200 },
  { date: "2025-06-29", online_sales: 103, in_store_sales: 160 },
  { date: "2025-06-30", online_sales: 446, in_store_sales: 400 },
]

const chartConfig = {
  online_sales: {
    label: "Online Sales",
    color: "var(--chart-1)",
  },
  in_store_sales: {
    label: "In Store Sales",
    color: "var(--chart-2)",
  },
}

export const GraphSales = () => {
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
    <div className="mx-20 mt-5">
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Chart</CardTitle>
          <CardDescription>
            Showing total sales for the last 3 months
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
              <linearGradient id="fillOnlineSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-online_sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-online_sales)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillStoreSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-in_store_sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-in_store_sales)"
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
              dataKey="in_store_sales"
              type="natural"
              fill="url(#fillStoreSales)"
              stroke="var(--color-in_store_sales)"
              stackId="a"
            />
            <Area
              dataKey="online_sales"
              type="natural"
              fill="url(#fillOnlineSales)"
              stroke="var(--color-online_sales)"
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
