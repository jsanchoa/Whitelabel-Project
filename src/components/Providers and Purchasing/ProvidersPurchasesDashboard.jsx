import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown
} from "lucide-react";

import { PurchasesTableMini } from "./PurchasesTableMini";
import { ProvidersTableMini } from "./ProvidersTableMini";
import { PurchasesFrequencyChart } from "./PurchasesFrequencyChart";

export function ProvidersPurchasesDashboard() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Purchase Value */}
        <Card className="w-full shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Purchase Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-neutral-800">$4,921.13</div>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">
              Based on all purchases
            </p>
            <p className="text-xs text-muted-foreground">Up to July 2025</p>
          </CardContent>
        </Card>

        {/* Active Providers */}
        <Card className="w-full shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Providers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-neutral-800">11</div>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">
              Supplier participation ↑
            </p>
            <p className="text-xs text-muted-foreground">Tracked this year</p>
          </CardContent>
        </Card>

        {/* Pending Purchases */}
        <Card className="w-full shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Purchases
            </CardTitle>
            <Badge className="text-xs font-normal" variant="outline">
              <TrendingUp className="size-4 mr-1" />+2 this month
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-neutral-800">4</div>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">
              Orders in progress
            </p>
            <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
          </CardContent>
        </Card>

        {/* Inactive Providers */}
        <Card className="w-full shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Inactive Providers
            </CardTitle>
            <Badge className="text-xs font-normal" variant="outline">
              <TrendingDown className="size-4 mr-1" />-1 this month
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-neutral-800">4</div>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">
              Reduced activity
            </p>
            <p className="text-xs text-muted-foreground">Review engagement</p>
          </CardContent>
        </Card>
      </div>

      {/* Mini Tables */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <PurchasesTableMini />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Top Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <ProvidersTableMini />
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Purchase Frequency by Provider</CardTitle>
        </CardHeader>
        <CardContent className="h-[420px]">
          <PurchasesFrequencyChart />
        </CardContent>
      </Card>
    </div>
  )
}