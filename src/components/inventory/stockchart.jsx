"use client";

import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from "@/api/api";

export const description = "A bar chart";

export function ChartBarDefault() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setErr(null);
    try {
      const [prodRes, catRes] = await Promise.all([
        api.get("/v1/products/list"),
        api.get("/v1/categories/list").catch(() => ({ data: [] })),
      ]);

      const products = Array.isArray(prodRes.data) ? prodRes.data : [];
      const categories = Array.isArray(catRes.data) ? catRes.data : [];

      const nameById = new Map(
        categories.map((c, idx) => [
          c.category_id ?? c.id ?? idx,
          c.name ?? c.category_name ?? c.descripcion ?? c.description ?? `Category ${c.id ?? idx}`,
        ])
      );

      const totals = products.reduce((acc, p) => {
        const catId = p.category_id ?? p.CategoryId ?? p.category?.id;
        const stock = Number(p.stock ?? p.quantity ?? 0);
        if (catId != null && Number.isFinite(stock)) {
          acc[catId] = (acc[catId] ?? 0) + stock;
        }
        return acc;
      }, {});

      const data = Object.entries(totals)
        .map(([id, total]) => ({
          category: nameById.get(Number(id)) ?? `Category ${id}`,
          stock: total,
        }))
        .sort((a, b) => a.category.localeCompare(b.category));

      setChartData(data);
    } catch (e) {
      console.error(e);
      setErr("Failed to load chart data.");
      setChartData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row gap-4 px-4 lg:px-6 pt-4">
      <Card className="@container/card min-w-[280px] flex-1">
        <CardHeader className="text-2xl @[250px]/card:text-3xl font-bold">
          <CardTitle>Stock by Category</CardTitle>
        </CardHeader>
        <CardContent className="h-[420px]">
          {loading ? (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Loading…
            </div>
          ) : err ? (
            <div className="flex h-full items-center justify-center text-sm text-red-600">
              {err}
            </div>
          ) : chartData.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              No data.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="category" tickLine={false} tickMargin={10} axisLine={false} />
                <Tooltip />
                <Bar dataKey="stock" fill="#000000" radius={8} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
}