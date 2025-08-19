import { ProductsStockTable } from "./productstocktable";
import { useEffect, useState } from "react";
import api from "@/api/api";

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export function DashboardHeader() {
  const [inventoryValue, setInventoryValue] = useState(null);

  useEffect(() => {
    const fetchAndCalc = async () => {
      try {

        const { data } = await api.get("/v1/products/list");

        const total = Array.isArray(data)
          ? data.reduce((sum, p) => {
              const price = Number(p?.price) || 0;
              const stock = Number(p?.stock) || 0;
              return sum + price * stock;
            }, 0)
          : 0;

        setInventoryValue(Math.round(total * 100) / 100);
      } catch (err) {
        console.error("Failed to load products:", err);
        setInventoryValue(0);
      }
    };

    fetchAndCalc();
  }, []);

  return (
    <div className="flex flex-row gap-4 px-4 lg:px-6 overflow-x-auto">
      <Card className="@container/card min-w-[280px] flex-1 h-[250px]">
        <CardHeader className="h-full">
          <CardTitle className="text-2xl @[250px]/card:text-3xl">
            Total Inventory Value
          </CardTitle>
          <div className="flex flex-1 items-center justify-center">
            <CardTitle className="text-4xl @[250px]/card:text-5xl font-semibold tabular-nums text-center">
              {inventoryValue === null ? "…" : fmt.format(inventoryValue)}
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
  );
}