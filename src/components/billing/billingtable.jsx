import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, FileDown } from "lucide-react";
import { toast } from "sonner"

export const BillingTable = () => {
  const [preSales, setPreSales] = useState([
    {
      id: 1,
      clientName: "Alice Johnson",
      date: "2025-07-26",
      products: [
        { name: "Wireless Mouse", quantity: 2, price: 25.0 },
        { name: "USB-C Hub", quantity: 1, price: 30.0 },
      ],
    },
    {
      id: 2,
      clientName: "Bob Smith",
      date: "2025-07-25",
      products: [
        { name: "USB-C Hub", quantity: 1, price: 30.0 },
      ],
    },
    {
      id: 3,
      clientName: "Carla Martinez",
      date: "2025-07-24",
      products: [
        { name: "Gaming Keyboard", quantity: 2, price: 60.0 },
        { name: "Mouse Pad", quantity: 1, price: 20.0 },
      ],
    },
  ]);

  const calculateTotal = (products) => {
    return products.reduce((sum, p) => sum + p.quantity * p.price, 0);
  };

  const confirmBilling = (id) => {
    toast(`Billing confirmed for sale #${id}`, {
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          }});
  };

  const deletePreSale = (id) => {
    setPreSales(preSales.filter((sale) => sale.id !== id));
  };

  const downloadInvoice = (id) => {
    toast(`Downloading invoice for sale #${id}`);
  };

  return (
    <div className="flex justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Billing & Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-[1200px]">
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="text-right">Total ($)</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.clientName}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      {sale.products.map((prod, i) => (
                        <li key={i}>
                          <span className="font-medium">{prod.name}</span> × {prod.quantity} (${(prod.quantity * prod.price).toFixed(2)})
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ${calculateTotal(sale.products).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="default" onClick={() => confirmBilling(sale.id)}>
                      Confirm
                    </Button>
                    <Button variant="outline" onClick={() => downloadInvoice(sale.id)}>
                      <FileDown className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" onClick={() => deletePreSale(sale.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
