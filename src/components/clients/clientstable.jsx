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

const clients = [
  {
    name: "John",
    lastnames: "Doe Romes",
    email: "john.doe@example.com",
    phonenumber: "+506 8888 1234",
    status: "Active"
  },
  {
    name: "Maria",
    lastnames: "González Vargas",
    email: "maria.gonzalez@example.com",
    phonenumber: "+506 8888 5678",
    status: "Inactive"
  },
  {
    name: "Carlos",
    lastnames: "Ramírez Fernandez",
    email: "c.ramirez@example.com",
    phonenumber: "+506 8888 9012",
    status: "Active"
  },
  {
    name: "Ana",
    lastnames: "Morales Rojas",
    email: "ana.morales@example.com",
    phonenumber: "+506 8888 3456",
    status: "Pending"
  },
  {
    name: "Luis",
    lastnames: "Fernández Segura",
    email: "luis.fernandez@example.com",
    phonenumber: "+506 8888 7890",
    status: "Active"
  },
  {
    name: "Elena",
    lastnames: "Vargas Rojas",
    email: "elena.vargas@example.com",
    phonenumber: "+506 8888 1122",
    status: "Inactive"
  },
  {
    name: "Daniel",
    lastnames: "Méndez Rivera",
    email: "daniel.mendez@example.com",
    phonenumber: "+506 8888 3344",
    status: "Pending"
  },
  {
    name: "Sofía",
    lastnames: "Castro Lopez",
    email: "sofia.castro@example.com",
    phonenumber: "+506 8888 5566",
    status: "Active"
  },
  {
    name: "Javier",
    lastnames: "López Gomez",
    email: "javier.lopez@example.com",
    phonenumber: "+506 8888 7788",
    status: "Inactive"
  },
  {
    name: "Lucía",
    lastnames: "Sánchez Mendoza",
    email: "lucia.sanchez@example.com",
    phonenumber: "+506 8888 9900",
    status: "Active"
  }
];

export const ClientsTable = () => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <Table className="rounded-[12px] w-[1250px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Name</TableHead>
              <TableHead>Last Names</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.lastnames}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phonenumber}</TableCell>
                <TableCell>{client.status}</TableCell>
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
                          This action cannot be undone. This will permanently delete this client from your records.
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