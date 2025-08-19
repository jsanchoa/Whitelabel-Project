import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import api from "@/api/api";
import { Pencil, Trash2 } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    try {
      const response = await api.get("http://localhost:3000/v1/products/list");
      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log(error);
    }
  };

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
              <TableRow key={product.product_id ?? product.sku}>
                <TableCell className="font-medium">{product.sku}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.category_id}</TableCell>
                <TableCell>{product.provider_id}</TableCell>
                <TableCell>
                  {typeof product.price === "number"
                    ? product.price.toFixed(2)
                    : product.price}
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button size="icon" variant="outline" aria-label="Edit">
                    <Pencil />
                  </Button>

                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button size="icon" variant="destructive" aria-label="Delete">
                        <Trash2 />
                      </Button>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg">
                        <Dialog.Title className="text-lg font-semibold">
                          Delete Confirmation
                        </Dialog.Title>
                        <Dialog.Description className="mt-1 text-sm text-gray-600">
                          This action cannot be undone. This will permanently delete
                          this product from your inventory.
                        </Dialog.Description>

                        <div className="mt-6 flex justify-center gap-2">
                          <Dialog.Close asChild>
                            <Button variant="destructive">Confirm</Button>
                          </Dialog.Close>
                          <Dialog.Close asChild>
                            <Button variant="outline">Cancel</Button>
                          </Dialog.Close>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};