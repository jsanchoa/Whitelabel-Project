import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
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

const purchases = [
    {
    purchasenumber: "PUR-001",
    client: "John Doe Romes",
    purchasedate: "2024-01-15",
    products: "Wireless Mouse",
    quantity: 2,
    paymentmethod: "Credit Card",
    subtotal: "₡25,500",
    status: "Completed"
  },
  {
    purchasenumber: "PUR-002",
    client: "Maria González Vargas",
    purchasedate: "2024-01-18",
    products: "Office Chair",
    quantity: 3,
    paymentmethod: "Bank Transfer",
    subtotal: "₡229,500",
    status: "Pending"
  },
  {
    purchasenumber: "PUR-003",
    client: "Carlos Ramírez Fernandez",
    purchasedate: "2024-01-20",
    products: "Gaming Keyboard",
    quantity: 1,
    paymentmethod: "Cash",
    subtotal: "₡38,250",
    status: "Completed"
  },
  {
    purchasenumber: "PUR-004",
    client: "Ana Morales Rojas",
    purchasedate: "2024-01-22",
    products: "HD Monitor 24\"",
    quantity: 2,
    paymentmethod: "Credit Card",
    subtotal: "₡132,600",
    status: "Processing"
  },
  {
    purchasenumber: "PUR-005",
    client: "Luis Fernández Segura",
    purchasedate: "2024-01-25",
    products: "Standing Desk",
    quantity: 1,
    paymentmethod: "Bank Transfer",
    subtotal: "₡163,200",
    status: "Completed"
  },
  {
    purchasenumber: "PUR-006",
    client: "Elena Vargas Rojas",
    purchasedate: "2024-01-28",
    products: "USB-C Hub",
    quantity: 5,
    paymentmethod: "Cash",
    subtotal: "₡102,000",
    status: "Cancelled"
  },
  {
    purchasenumber: "PUR-007",
    client: "Daniel Méndez Rivera",
    purchasedate: "2024-02-01",
    products: "Bluetooth Headphones",
    quantity: 2,
    paymentmethod: "Credit Card",
    subtotal: "₡86,700",
    status: "Pending"
  },
  {
    purchasenumber: "PUR-008",
    client: "Sofía Castro Lopez",
    purchasedate: "2024-02-03",
    products: "External Hard Drive 1TB",
    quantity: 1,
    paymentmethod: "Bank Transfer",
    subtotal: "₡48,450",
    status: "Processing"
  },
  {
    purchasenumber: "PUR-009",
    client: "Javier López Gomez",
    purchasedate: "2024-02-05",
    products: "Portable Projector",
    quantity: 1,
    paymentmethod: "Cash",
    subtotal: "₡112,200",
    status: "Completed"
  },
  {
    purchasenumber: "PUR-010",
    client: "Lucía Sánchez Mendoza",
    purchasedate: "2024-02-08",
    products: "Whiteboard Set",
    quantity: 2,
    paymentmethod: "Credit Card",
    subtotal: "₡45,900",
    status: "Pending"
  }
];

export const PurchasesTable = () => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <Table className="rounded-[12px] w-[1250px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Purchase Number</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Subtotal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchases.map((purchase, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{purchase.purchasenumber}</TableCell>
                <TableCell>{purchase.client}</TableCell>
                <TableCell>{purchase.purchasedate}</TableCell>
                <TableCell>{purchase.products}</TableCell>
                <TableCell>{purchase.quantity}</TableCell>
                <TableCell>{purchase.paymentmethod}</TableCell>
                <TableCell>{purchase.subtotal}</TableCell>
                <TableCell>{purchase.status}</TableCell>
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
                          This action cannot be undone. This will permanently delete this purchase from your records.
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