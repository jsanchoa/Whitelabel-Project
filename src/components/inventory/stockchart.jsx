"use client"

import { TrendingUp } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const description = "A bar chart"

const chartData = [
  { category: "Electronics", stock: 120 },
  { category: "Furniture", stock: 85 },
  { category: "Accessories", stock: 150 },
  { category: "Storage", stock: 90 },
  { category: "Office Supplies", stock: 130 },
  { category: "Lighting", stock: 75 },
  { category: "Audio", stock: 105 },
  { category: "Video", stock: 95 },
  { category: "Ergonomics", stock: 60 },
  { category: "Displays", stock: 110 },
]

export function ChartBarDefault() {
  return (
    <div className="flex flex-row gap-4 px-4 lg:px-6 pt-4">
      <Card className="@container/card min-w-[280px] flex-1">
        <CardHeader>
          <CardTitle>Stock by Category</CardTitle>
        </CardHeader>
        <CardContent className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <Tooltip />
              <Bar dataKey="stock" fill="#000000" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}