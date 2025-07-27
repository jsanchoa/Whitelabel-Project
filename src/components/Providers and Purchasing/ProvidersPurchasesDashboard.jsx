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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="text-lg font-semibold">
          <CardHeader>
            <CardTitle>Total Purchase Value</CardTitle>
            <CardDescription className="text-3xl font-bold text-black">
              ₡1,005,300
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-lg font-semibold">
          <CardHeader>
            <CardTitle>Active Providers</CardTitle>
            <CardDescription className="text-3xl font-bold text-black">
              4
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-lg font-semibold">
          <CardHeader>
            <CardTitle>Pending Purchases</CardTitle>
            <Badge variant="outline">
              <TrendingUp className="size-4 mr-1" />+2 this week
            </Badge>
            <CardDescription className="text-3xl font-bold text-black">
              3
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-lg font-semibold">
          <CardHeader>
            <CardTitle>Inactive Providers</CardTitle>
            <Badge variant="outline">
              <TrendingDown className="size-4 mr-1" />-1 this month
            </Badge>
            <CardDescription className="text-3xl font-bold text-black">
              1
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

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

<Card>
  <CardHeader>
    <CardTitle className="text-xl font-semibold">Purchase Frequency by Provider</CardTitle>
  </CardHeader>
  <CardContent className="h-[420px]">
    <PurchasesFrequencyChart />
  </CardContent>
</Card>
    </div>
  );
}