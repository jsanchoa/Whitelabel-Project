import { Button } from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import api from "@/api/api";
import { useNavigate } from "react-router";
import { toast } from "sonner";


export const ProvidersTable = () => {
  const [providers, setProviders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProvidersList();
  }, []);

  // Obtener lista de proveedores
  const getProvidersList = async () => {
    try {
      const { data } = await api.get("http://localhost:3000/v1/providers/list");
      setProviders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    }
  };

  // Eliminar 
  const deleteProvider = async (id) => {
    try {
      await api.delete(`http://localhost:3000/v1/providers/delete/${id}`);
      toast.success("Provider has been deleted");
    } catch (error) {
      toast.error("Provider could not be deleted");
      throw error;
    }
  };

  return (
    <div className="flex justify-center m-8">
      <div>
        <Table className="rounded-[12px] w-[1250px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Business Type</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {providers.map((prov) => (
              <TableRow key={prov.id}>
                <TableCell className="font-medium">{prov?.name}</TableCell>
                <TableCell>{prov?.business_type}</TableCell>
                <TableCell>{prov?.account_number}</TableCell>
                <TableCell>{prov?.address}</TableCell>
                <TableCell>{prov?.status}</TableCell>

                <TableCell className="flex justify-end gap-2">
                  <Button
                    onClick={() => navigate(`/purchasing/providers/edit/${prov.id}`)}
                    className="w-8 h-8"
                  >
                    <Pencil />
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-8 h-8" variant="destructive">
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
                          <Button
                            onClick={async () => {
                              await deleteProvider(prov.id);
                              await getProvidersList(); 
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