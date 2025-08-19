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
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SalesTable = () => {
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
      products: [{ name: "USB-C Hub", quantity: 1, price: 30.0 }],
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

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleDelete = (id) => {
    setPreSales(preSales.filter((sale) => sale.id !== id));
  };

  const calculateTotal = (products) => {
    return products.reduce((sum, p) => sum + p.quantity * p.price, 0);
  };

  return (
    <div className="flex justify-center m-8">
      <Card className="w-[1250px]">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Pre-Sales List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Total ($)</TableHead>
                <TableHead className="text-center"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preSales.map((sale) => (
                <>
                  <TableRow
                    key={sale.id}
                    className="cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => toggleExpand(sale.id)}
                  >
                    <TableCell>
                      {expandedRow === sale.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{sale.clientName}</TableCell>
                    <TableCell>{sale.date}</TableCell>
                    <TableCell className="text-right font-semibold">
                      ${calculateTotal(sale.products).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation(); // Evita que se despliegue al borrar
                          handleDelete(sale.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>

                  {/* Fila expandida */}
                  {expandedRow === sale.id && (
                    <TableRow className="bg-gray-50">
                      <TableCell></TableCell>
                      <TableCell colSpan={4}>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">Products</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {sale.products.map((prod, i) => (
                              <li key={i}>
                                <span className="font-medium">{prod.name}</span>{" "}
                                × {prod.quantity} (${prod.price} c/u) →{" "}
                                <span className="font-semibold">
                                  ${(prod.quantity * prod.price).toFixed(2)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
