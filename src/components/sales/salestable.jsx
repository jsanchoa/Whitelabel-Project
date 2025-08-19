import { useEffect, useState } from "react";
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
import { toast } from "sonner"
import { Fragment } from 'react';
import api from "@/api/api";

export const SalesTable = () => {
  const [preSales, setPreSales] = useState([]);

  useEffect(() => {
    getSalesInfo();
  }, [])
  

  const getSalesInfo = async() => {
    const response = await api.get("http://localhost:3000/v1/clientpurchaseorder/list");
    
    setPreSales(response.data);
  }

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };


  const handleDelete = async (event, id) => {
    event.stopPropagation();

    try {
      await api.delete(`http://localhost:3000/v1/clientpurchaseorder/delete/${id}`);
      toast.success("La venta se eliminó correctamente");
      await getSalesInfo();
    } catch (error) {
      toast.error("No se pudo eliminar la venta");
    }
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
                <TableHead>Presale ID</TableHead>
                <TableHead>Client ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preSales.map((sale) => (
                <Fragment key={sale.id}>
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
                    <TableCell>{sale.id}</TableCell>
                    <TableCell>{sale.Client.id}</TableCell>
                    <TableCell className="font-medium">{sale.Client.name} {sale.Client.last_name}</TableCell>
                    <TableCell className="text-right font-semibold">
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={(e) => {
                          handleDelete(e, sale.id);
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
                      <TableCell colSpan={5}>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">Products</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {sale.PO_Products.map((prod, i) => (
                              <li key={i}>
                                <span className="font-medium">{prod.Product?.description}</span>{" "}
                                × {prod.Product?.quantity} (${prod.Product?.price} c/u) {" "}
                                →{" "}
                                <span>
                                   Quantity: {prod?.quantity}  →{" "}
                                </span>
                                <span className="font-semibold">
                                  Subtotal: ${(prod?.quantity * prod.Product?.price)} {" "}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
