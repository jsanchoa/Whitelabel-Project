import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UserPlus } from "lucide-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useFormHook } from "@/hooks/use-hook";

export const ClientsEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();               // <-- /clients/edit/:id
  const [loading, setLoading] = useState(true);

  // mismos campos que en Add
  const { name, last_name, email, phone, onInputChange, setFormState } = useFormHook({
    name: "",
    last_name: "",
    email: "",
    phone: ""
  });

  // Cargar datos del cliente y prellenar
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/v1/clients/info/${id}`);

        // prellenar usando el mismo onInputChange
        setFormState({
            name: data.name ?? "",
            last_name: data.last_name ?? "",
            email: data.email ?? "",
            phone: data.phone ?? ""
        });

      } catch (error) {
        toast.error("No se pudo cargar el cliente");
        navigate("/clients");
      } finally {
        setLoading(false);
      }
    };
    fetchClient();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: name?.trim(),
      last_name: last_name?.trim(),
      email: email?.trim(),
      phone: phone?.trim() || null
    };

    try {
      // PUT para actualizar (cámbialo a PATCH si tu API lo usa)
      await axios.patch(`http://localhost:3000/v1/clients/edit/${id}`, payload);
      toast.success("El cliente se actualizó correctamente");
      navigate("/clients");
    } catch (error) {
      toast.error("No se pudo actualizar el cliente");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-sm text-muted-foreground">
        Cargando cliente...
      </div>
    );
  }

  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <form onSubmit={handleSubmit}>
        <p className="font-sans text-2xl flex justify-center font-medium mb-12">
          Editar Cliente
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
          <Button type="button" onClick={() => navigate("/clients")} className="w-50">
            <ArrowLeft />
            Regresar
          </Button>
          <Button type="submit" className="w-50">
            <UserPlus />
            Guardar cambios
          </Button>
        </div>
      </form>
    </div>
  );
};