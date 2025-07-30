"use client"

import React from "react"
import {
  AlertTriangle,
  BarChart3,
  ShoppingCart,
  Users,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartBarDefault } from "../inventory/stockchart"
import { PurchasesFrequencyChart } from "../Providers and Purchasing/PurchasesFrequencyChart"

export const ReportingDashboardCards = ({
  sales = { day: 0, week: 0, month: 0, changeDay: 0, changeWeek: 0, changeMonth: 0 },
  topProducts = [],
  clients = { total: 0, active: 0 },
  inventoryStock = [],
}) => {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="w-full shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
              <Users className="text-purple-600" /> Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">👥 Registered Clients: <span className="font-semibold">{clients.total}</span></p>
            <p className="text-base">🟢 Active Clients: <span className="font-semibold">{clients.active}</span></p>
          </CardContent>
        </Card>

        <Card className="w-full shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="text-green-600" /> Total Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Today: <span className="font-semibold">${sales.day.toLocaleString()}</span>{" "}
              <span className="text-green-600">(+{sales.changeDay}%)</span>
            </p>
            <p className="text-sm">
              This week: <span className="font-semibold">${sales.week.toLocaleString()}</span>{" "}
              <span className="text-red-600">({sales.changeWeek}%)</span>
            </p>
            <p className="text-sm">
              This month: <span className="font-semibold">${sales.month.toLocaleString()}</span>{" "}
              <span className="text-green-600">(+{sales.changeMonth}%)</span>
            </p>
          </CardContent>
        </Card>

        <Card className="w-full shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
              <ShoppingCart className="text-blue-600" /> Best Selling Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-base space-y-1">
              {topProducts.map((p, i) => (
                <li key={i}>🔹 <span className="font-medium">{p.name}</span>: {p.quantity} Units</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
              <AlertTriangle className="text-yellow-600" /> Critical Stock Inventory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-base space-y-1">
              {inventoryStock.map((prod, idx) => (
                <li key={idx}>⚠️ <span className="font-medium">{prod.name}</span> – Stock: {prod.stock}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="@container/card min-w-[280px] flex-1">
            <CardHeader className="text-2xl @[250px]/card:text-3xl font-bold">
                <CardTitle>Purchase Frequency by Provider</CardTitle>
            </CardHeader>
            <CardContent className="h-[420px]">
                <PurchasesFrequencyChart />
            </CardContent>
         </Card>

        <Card>
          <ChartBarDefault />
        </Card>
      </div>
    </div>
  )
}