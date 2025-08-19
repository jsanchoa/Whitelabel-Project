"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/api/api";

const LOW_STOCK_THRESHOLD = 10;

export const ProductsStockTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductsList = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("http://localhost:3000/v1/products/list");
      const list = Array.isArray(data) ? data : [];
      const lowStock = list.filter((p) => Number(p?.stock ?? 0) <= LOW_STOCK_THRESHOLD);
      setProducts(lowStock);
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="max-h-[220px] overflow-y-auto w-[700px] rounded-[12px] border">
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <TableHead className="w-[100px]">SKU</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-sm text-muted-foreground">
                  Loading...
                </TableCell>
              </TableRow>
            ) : products.length ? (
              products.map((product) => (
                <TableRow key={product.product_id ?? product.sku}>
                  <TableCell className="font-medium">{product.sku}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell className="text-right">{product.stock}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-sm text-muted-foreground">
                  No low-stock products.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};