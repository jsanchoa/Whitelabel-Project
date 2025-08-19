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
import { useEffect, useState } from "react";
import { Pencil, Trash2} from "lucide-react";
import api from "@/api/api";
import { useNavigate } from "react-router";
import { toast } from "sonner";


export const ClientsTable = () => {

  //Hook to save my data
  const [clients, setClients] = useState([]);

  const navigate = useNavigate();
  
  //useEffect funciona para cargar la funcion cada vez que renderiza la pagina
  useEffect(() => {
    getClientsList();
  }, []);


  // Function to get ClientsList
  const getClientsList = async() => {

    try {
      // Variable for wait the get response and then save it into clients useState hook
      const response = await api.get('http://localhost:3000/v1/clients/list');
      setClients(response.data);
    } catch(error) {
      console.log(error);
    }

  }

  const deleteClient = async(id) => {

    try {
      // Variable for wait the get response and then save it into clients useState hook
      const response = await api.delete(`http://localhost:3000/v1/clients/delete/${id}`);
      toast.success("Client has been deleted");
    } catch(error) {
      toast.error("Client could not be deleted");
    }

  }


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
                <TableCell className="font-medium">{client?.name}</TableCell>
                <TableCell>{client?.last_name}</TableCell>
                <TableCell>{client?.email}</TableCell>
                <TableCell>{client?.phone}</TableCell>
                <TableCell>{client?.status}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button onClick={() => { navigate(`/clients/edit/${client.id}`) }} className="w-8 h-8">
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
                            <Button
                              onClick={async () => {
                                await deleteClient(client.id);
                                await getClientsList();   // refresca tabla
                              }}
                            >
                              Confirm
                            </Button>
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