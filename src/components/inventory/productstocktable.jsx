"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil, Trash2 } from "lucide-react"

const products = [
  {
    sku: "SKU001",
    description: "Wireless Mouse",
    stock: 9,
  },
  {
    sku: "SKU002",
    description: "Gaming Keyboard",
    stock: 7,
  },
  {
    sku: "SKU003",
    description: "Office Chair",
    stock: 3,
  },
  {
    sku: "SKU004",
    description: 'HD Monitor 24"',
    stock: 6,
  },
  {
    sku: "SKU005",
    description: "Standing Desk",
    stock: 10,
  },
  {
    sku: "SKU006",
    description: "USB-C Hub",
    stock: 10,
  },
  {
    sku: "SKU007",
    description: "Bluetooth Headphones",
    stock: 8,
  },
  {
    sku: "SKU008",
    description: "External Hard Drive 1TB",
    stock: 4,
  },
  {
    sku: "SKU009",
    description: "Portable Projector",
    stock: 7,
  },
  {
    sku: "SKU010",
    description: "Whiteboard Set",
    stock: 9,
  },
  {
    sku: "SKU011",
    description: "Ergonomic Footrest",
    stock: 2,
  },
  {
    sku: "SKU012",
    description: "Webcam 1080p",
    stock: 3,
  },
  {
    sku: "SKU013",
    description: "Desk Lamp LED",
    stock: 6,
  },
]

export const ProductsStockTable = () => {
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
            {products.map((product) => (
              <TableRow key={product.sku}>
                <TableCell className="font-medium">{product.sku}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="text-right">{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}