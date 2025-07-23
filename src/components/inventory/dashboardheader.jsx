import { TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DashboardHeader() {
  return (
    <div className="flex flex-row gap-4 px-4 lg:px-6 overflow-x-auto">
      <Card className="@container/card min-w-[280px] flex-1">
        <CardHeader>
          <CardTitle>Total Inventory Value</CardTitle>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $65,250.00
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="@container/card min-w-[280px] flex-1">
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingDown className="size-4 mr-1" />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <TrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}