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

const providers = [
  {
    name: "Tech Supplies Co.",
    businesstype: "Electronics",
    accountnumber: "ACC-123456",
    address: "123 Main St, San José",
    status: "Active",
  },
  {
    name: "Global Textiles",
    businesstype: "Textiles",
    accountnumber: "ACC-654321",
    address: "456 Cotton Ave, Cartago",
    status: "Inactive",
  },
  {
    name: "Costa Hardware",
    businesstype: "Construction",
    accountnumber: "ACC-789012",
    address: "789 Tool Rd, Alajuela",
    status: "Active",
  },
  {
    name: "Organic Farms",
    businesstype: "Agriculture",
    accountnumber: "ACC-345678",
    address: "321 Green Way, Heredia",
    status: "Active",
  },
  {
    name: "Pura Vida Logistics",
    businesstype: "Transport",
    accountnumber: "ACC-901234",
    address: "987 Cargo Blvd, Puntarenas",
    status: "Active",
  },
];

export const ProvidersTable = () => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <Table className="rounded-[12px] w-[1250px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Name</TableHead>
              <TableHead>Business Type</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {providers.map((provider, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{provider.name}</TableCell>
                <TableCell>{provider.businesstype}</TableCell>
                <TableCell>{provider.accountnumber}</TableCell>
                <TableCell>{provider.address}</TableCell>
                <TableCell>{provider.status}</TableCell>
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
                          This action cannot be undone. This will permanently delete this provider from your records.
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