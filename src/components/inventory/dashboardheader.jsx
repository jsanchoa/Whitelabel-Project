import { TrendingDown, TrendingUp } from "lucide-react";
import { ProductsStockTable } from "./productstocktable";

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
      <Card className="@container/card min-w-[280px] flex-1 h-[250px]">
        <CardHeader className="h-full">
          <CardTitle className="text-2xl @[250px]/card:text-3xl">
            Total Inventory Value
          </CardTitle>
          <div className="flex flex-1 items-center justify-center">
            <CardTitle className="text-4xl @[250px]/card:text-5xl font-semibold tabular-nums text-center">
              $65,250.00
            </CardTitle>
          </div>
        </CardHeader>
      </Card>

      <Card className="@container/card min-w-[280px] flex-1 h-[250px]">
        <CardHeader>
          <CardTitle className="text-2xl @[250px]/card:text-3xl">
            Low Stock Products
          </CardTitle>
        </CardHeader>
        <CardFooter className="w-full flex-1 flex items-center justify-center overflow-hidden">
          <ProductsStockTable />
        </CardFooter>
      </Card>
    </div>
  )
}