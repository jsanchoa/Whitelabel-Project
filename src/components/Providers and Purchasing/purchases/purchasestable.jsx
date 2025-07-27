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
    purchasenumber: "PUR-01",
    provider: "Tech Supplies Co.",
    purchasedate: "2025-06-05",
    products: "Wireless Mouse",
    quantity: 10,
    paymentmethod: "Credit Card",
    subtotal: "$235.85",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-02",
    provider: "Fresh Produce Inc.",
    purchasedate: "2025-06-08",
    products: "Organic Avocados",
    quantity: 20,
    paymentmethod: "Cash",
    subtotal: "$113.21",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-03",
    provider: "Costa Hardware",
    purchasedate: "2025-06-12",
    products: "Industrial Fans",
    quantity: 5,
    paymentmethod: "Bank Transfer",
    subtotal: "$849.06",
    status: "Processing",
  },
  {
    purchasenumber: "PUR-04",
    provider: "EduTech Supplies",
    purchasedate: "2025-06-15",
    products: "Whiteboards",
    quantity: 6,
    paymentmethod: "Credit Card",
    subtotal: "$180.00",
    status: "Pending",
  },
  {
    purchasenumber: "PUR-05",
    provider: "Global Textiles",
    purchasedate: "2025-06-18",
    products: "Curtains",
    quantity: 12,
    paymentmethod: "Credit Card",
    subtotal: "$452.83",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-06",
    provider: "Organic Farms",
    purchasedate: "2025-06-22",
    products: "Fresh Lettuce",
    quantity: 30,
    paymentmethod: "Cash",
    subtotal: "$167.92",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-07",
    provider: "Tech Supplies Co.",
    purchasedate: "2025-06-25",
    products: "Laptop Chargers",
    quantity: 8,
    paymentmethod: "Bank Transfer",
    subtotal: "$333.58",
    status: "Pending",
  },
  {
    purchasenumber: "PUR-08",
    provider: "Pura Vida Logistics",
    purchasedate: "2025-06-28",
    products: "Shipping Crates",
    quantity: 15,
    paymentmethod: "Cash",
    subtotal: "$566.04",
    status: "Processing",
  },
  {
    purchasenumber: "PUR-09",
    provider: "Costa Hardware",
    purchasedate: "2025-07-02",
    products: "Power Drills",
    quantity: 10,
    paymentmethod: "Credit Card",
    subtotal: "$716.98",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-010",
    provider: "ElectroMax Solutions",
    purchasedate: "2025-07-05",
    products: "Projector Screens",
    quantity: 4,
    paymentmethod: "Bank Transfer",
    subtotal: "$286.79",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-011",
    provider: "Fresh Produce Inc.",
    purchasedate: "2025-07-09",
    products: "Mango Crates",
    quantity: 25,
    paymentmethod: "Cash",
    subtotal: "$188.68",
    status: "Pending",
  },
  {
    purchasenumber: "PUR-012",
    provider: "Sustainable Solutions",
    purchasedate: "2025-07-12",
    products: "Recycled Paper",
    quantity: 50,
    paymentmethod: "Credit Card",
    subtotal: "$122.64",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-013",
    provider: "Organic Farms",
    purchasedate: "2025-07-16",
    products: "Organic Tomatoes",
    quantity: 40,
    paymentmethod: "Bank Transfer",
    subtotal: "$245.28",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-014",
    provider: "Tech Supplies Co.",
    purchasedate: "2025-07-21",
    products: "Computer Mice",
    quantity: 20,
    paymentmethod: "Credit Card",
    subtotal: "$471.70",
    status: "Pending",
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
              <TableHead>Provider</TableHead>
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
                <TableCell className="font-medium">
                  {purchase.purchasenumber}
                </TableCell>
                <TableCell>{purchase.provider}</TableCell>
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
                          This action cannot be undone. This will permanently
                          delete this purchase from your records.
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