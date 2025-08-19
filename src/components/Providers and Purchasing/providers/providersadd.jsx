import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UserPlus } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useFormHook } from "@/hooks/use-hook";

export const ProvidersAdd = () => {
  const navigate = useNavigate();

  // Campos de Provider (sin status)
  const { name, business_type, account_number, address, onInputChange } =
    useFormHook({
      name: "",
      business_type: "",
      account_number: "",
      address: "",
    });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: name?.trim(),
      business_type: business_type?.trim(),
      account_number: account_number?.trim(),
      address: address?.trim() || null,
    };

    try {
      await axios.post("http://localhost:3000/v1/providers/add", payload);
      toast.success("El proveedor se registró correctamente");
      navigate("/purchasing/providers");
    } catch (error) {
      toast.error("No se pudo registrar el proveedor");
    }
  };

  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <form onSubmit={handleSubmit}>
        <p className="font-sans text-2xl flex justify-center font-medium mb-12">
          Nuevo Proveedor
        </p>

        <div className="flex justify-between gap-5">
          <div className="w-[50%]">
            <div className="grid gap-2 mt-2">
              <Label>Nombre</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={onInputChange}
                placeholder="Proveedor S.A."
                className="bg-white"
              />
            </div>

            <div className="grid gap-2 mt-6">
              <Label>Tipo de Negocio</Label>
              <Input
                id="business_type"
                name="business_type"
                value={business_type}
                onChange={onInputChange}
                placeholder="Distribuidor, Mayorista, etc."
                className="bg-white"
              />
            </div>
          </div>

          <div className="w-[50%]">
            <div className="grid gap-2 mt-2">
              <Label>Número de Cuenta</Label>
              <Input
                id="account_number"
                name="account_number"
                value={account_number}
                onChange={onInputChange}
                placeholder="000-123-456"
                className="bg-white"
              />
            </div>

            <div className="grid gap-2 mt-6">
              <Label>Dirección</Label>
              <Input
                id="address"
                name="address"
                value={address}
                onChange={onInputChange}
                placeholder="San José, Costa Rica"
                className="bg-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-15 gap-10">
          <Button type="button" onClick={() => navigate("/purchasing/providers")} className="w-50">
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