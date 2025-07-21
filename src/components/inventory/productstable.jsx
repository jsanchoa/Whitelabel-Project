import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Pencil, Trash2 } from "lucide-react";

const products = [
  {
    sku: "SKU001",
    description: "Wireless Mouse",
    category: "Electronics",
    provider: "Tech Supplies Co.",
    price: 25.00,
    stock: 45,
  },
  {
    sku: "SKU002",
    description: "Gaming Keyboard",
    category: "Electronics",
    provider: "Keyboard King",
    price: 75.00,
    stock: 20,
  },
  {
    sku: "SKU003",
    description: "Office Chair",
    category: "Furniture",
    provider: "FurniCorp",
    price: 150.00,
    stock: 12,
  },
  {
    sku: "SKU004",
    description: "HD Monitor 24\"",
    category: "Electronics",
    provider: "DisplayWorld",
    price: 130.00,
    stock: 30,
  },
  {
    sku: "SKU005",
    description: "Standing Desk",
    category: "Furniture",
    provider: "ErgoFurnish",
    price: 320.00,
    stock: 10,
  },
  {
    sku: "SKU006",
    description: "USB-C Hub",
    category: "Accessories",
    provider: "Gadget Gear",
    price: 40.00,
    stock: 60,
  },
  {
    sku: "SKU007",
    description: "Bluetooth Headphones",
    category: "Electronics",
    provider: "SoundMax",
    price: 85.00,
    stock: 25,
  },
  {
    sku: "SKU008",
    description: "External Hard Drive 1TB",
    category: "Storage",
    provider: "DataStore Inc.",
    price: 95.00,
    stock: 18,
  },
  {
    sku: "SKU009",
    description: "Portable Projector",
    category: "Electronics",
    provider: "VisionTech",
    price: 220.00,
    stock: 8,
  },
  {
    sku: "SKU010",
    description: "Whiteboard Set",
    category: "Office Supplies",
    provider: "OfficeEssentials",
    price: 45.00,
    stock: 35,
  },
  {
    sku: "SKU011",
    description: "Ergonomic Footrest",
    category: "Furniture",
    provider: "ComfyWork",
    price: 28.00,
    stock: 50,
  },
  {
    sku: "SKU012",
    description: "Webcam 1080p",
    category: "Electronics",
    provider: "CamVision",
    price: 60.00,
    stock: 22,
  },
  {
    sku: "SKU013",
    description: "Desk Lamp LED",
    category: "Lighting",
    provider: "BrightLite",
    price: 35.00,
    stock: 40,
  },
];

export const ProductsTable = () => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <Table className="rounded-[12px] w-[1250px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SKU</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.sku}>
                <TableCell className="font-medium">{product.sku}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.provider}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button className="w-8 h-8">
                    <Pencil />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-8 h-8">
                        <Trash2 />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Delete Confirmation</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete this product from your inventory.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-center">
                        <DialogClose asChild>
                          <Button>Confirm</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};