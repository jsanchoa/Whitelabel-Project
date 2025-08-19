import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UserPlus } from "lucide-react";
import axios from "axios";
import { useFormHook } from "../hooks/use-hook";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const ClientsAdd = () => {
  const navigate = useNavigate();

  // Mapea a los campos de la tabla Client
  const { name, last_name, email, phone, onInputChange } = useFormHook({
    name: "",
    last_name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: name?.trim(),
      last_name: last_name?.trim(),
      email: email?.trim(),
      phone: phone?.trim() || null,
    };

    try {
      await axios.post("http://localhost:3000/v1/clients/add", payload);
      toast.success("El cliente se registró correctamente");
      navigate("/dashboard/clients");
    } catch (error) {
      toast.error("No se pudo registrar el cliente");
    }
  };

  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <form onSubmit={handleSubmit}>
        <p className="font-sans text-2xl flex justify-center font-medium mb-12">
          Nuevo Cliente
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
                placeholder="John"
                className="bg-white"
              />
            </div>

            <div className="grid gap-2 mt-6">
              <Label>Apellidos</Label>
              <Input
                id="last_name"
                name="last_name"
                value={last_name}
                onChange={onInputChange}
                placeholder="Doe Smith"
                className="bg-white"
              />
            </div>

            <div className="grid gap-2 mt-6">
              <Label>Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={onInputChange}
                placeholder="john@example.com"
                className="bg-white"
              />
            </div>
          </div>

          <div className="w-[50%]">
            <div className="grid gap-2 mt-2">
              <Label>Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                value={phone}
                onChange={onInputChange}
                placeholder="+506 8888-8888"
                className="bg-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-15 gap-10">
          <Button type="button" onClick={() => navigate("/dashboard/clients")} className="w-50">
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