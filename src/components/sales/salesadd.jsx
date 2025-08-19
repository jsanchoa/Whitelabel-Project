import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, UserPlus, PlusCircle, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner"
import api from "@/api/api";

export const SalesAddPage = () => {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [saleItems, setSaleItems] = useState([{ productId: "", quantity: 1 }]);

  useEffect(() => {
    listClients();
    listProducts();
  }, [])

  const listClients = async () => {
    const response = await api.get("http://localhost:3000/v1/users/list");
    setClients(response.data);
  }

  const listProducts = async () => {
    const response = await api.get("http://localhost:3000/v1/products/list");
    setProducts(response.data);
  }

  const handleAddItem = () => {
    setSaleItems([...saleItems, { productId: "", quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    setSaleItems(saleItems.filter((_, i) => i !== index));
  };

  const handleChangeItem = (index, field, value) => {
    const updated = [...saleItems];
    updated[index][field] = value;
    setSaleItems(updated);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      clientId: "id_cliente_aqui", // aquí conectás el select de cliente
      items: saleItems
    };

    try {
      await api.post('http://localhost:3000/v1/sales/new', data);
      toast.success("La venta se registró correctamente");
      navigate("/dashboard/sales");
    } catch (error) {
      toast.error("No se pudo registrar la venta");
    }
  };

  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <form onSubmit={handleSubmit}>
        <p className="font-sans text-2xl flex justify-center font-medium mb-12">
          Add Sale
        </p>

        {/* Cliente */}
        <div className="grid gap-2 mt-2 mb-6">
          <Label>Client</Label>
          <Select name="client">
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a client" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Clients</SelectLabel>
                {clients.map((client) =>
                  <SelectItem key={client.id} value={client.users_id.toString()}>
                    {client.name}
                  </SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Items de la venta */}
        <div className="space-y-4">
          <Label>Items</Label>
          {saleItems.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              {/* Selector de productos */}
              <Select
                value={item.product_id}
                onValueChange={(value) => handleChangeItem(index, "product_id", value)}
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Selecciona un producto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Productos</SelectLabel>
                    {products.map((product) => (
                      <SelectItem key={product.product_id} value={product.product_id.toString()}>
                        {product.description} - ${product.price}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Cantidad */}
              <Input
                type="number"
                min="1"
                placeholder="Cantidad"
                className="bg-white w-28"
                value={item.quantity}
                onChange={(e) => handleChangeItem(index, "quantity", e.target.value)}
              />

              {/* Botón eliminar */}
              <Button
                type="button"
                variant="destructive"
                onClick={() => handleRemoveItem(index)}
              >
                <Trash2 size={18} />
              </Button>
            </div>
          ))}
          <Button type="button" onClick={handleAddItem}>
            <PlusCircle size={18} className="mr-2" /> Añadir Item
          </Button>
        </div>

        <div className="flex justify-center mt-15 gap-10">
          <Button onClick={() => (navigate("/sales/list"))} type="button" className="w-50" >
            <ArrowLeft />
            Regresar
          </Button>
          <Button type="submit" className="w-50">
            <UserPlus />
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};
