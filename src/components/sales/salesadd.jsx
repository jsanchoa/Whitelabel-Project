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
import { ArrowLeft, UserPlus } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner"
import api from "@/api/api";

export const SalesAddPage = () => {

  const navigate = useNavigate();

  // const { nombre, apellido, correo, telefono, cedula, rol, onInputChange } = useFormHook({
  //   nombre: '',
  //   apellido: '',
  //   correo: '',
  //   telefono: '',
  //   membresia: '',
  //   rol: ''
  // });

  const [roles, setRoles] = useState([]);



  useEffect(() => {
    listClients();
  }, [])
  

  const [clients, setClients] = useState([]);

  const listClients = async() => {
    
    //traer la informacion
    const response = await api.get("http://localhost:3000/v1/users/list");

    //Guardo la informacion en mi useState
    setClients(response.data);
  }

  const handleSubmit = async(event) => {
    //! Esto nos va a funcionar a que no se recargue la pagina
    event.preventDefault();

    // const data = {
    //   nombre,
    //   apellido,
    //   correo,
    //   telefono,
    //   cedula,
    //   id_rol: Number(rol)
    // };

    //* Este realizará el metodo post
    try {
      await axios.post('http://localhost:3000/v1/usuarios/nuevo', data);
      toast.success("El usuario se registró correctamente");
    } catch(error) {
      toast.error("No se pudo registrar el usuario");
    }

    //Redirecciona a la lista de usuarios
    navigate("/dashboard/clients");
  }

  return (
     <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
    <form onSubmit={handleSubmit}>
      <p className="font-sans text-2xl flex justify-center font-medium mb-12">
        Add Sale
      </p>

      <div className="flex justify-between gap-5">
        <div className="w-[50%]">

          <div className="grid gap-2 mt-2">
            <Label>Client</Label>
            <Select name="client">
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a type of membership" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Clients</SelectLabel>
                  {
                    clients.map((client, index) => 
                      <SelectItem key={index} value={client.name}>{client.name}</SelectItem>
                    )
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2 mt-6">
            <Label>Nombre</Label>
            <Input
              id="nombre"
              name="nombre"
              // value={nombre}
              // onChange={onInputChange}
              placeholder="test"
              className="bg-white"
            />
          </div>


          <div className="grid gap-2 mt-6">
            <Label>Apellido</Label>
            <Input
              id="apellido"
              name="apellido"
              // value={apellido}
              // onChange={onInputChange}
              placeholder="test"
              className="bg-white"
            />
          </div>

          <div className="grid gap-2 mt-6">
            <Label>Correo Electronico</Label>
            <Input
              id="correo"
              name="correo"
              // value={correo}
              // onChange={onInputChange}
              type="email"
              placeholder="test@test.com"
              className="bg-white"
            />
          </div>

        </div>

        <div className="w-[50%]">

          <div className="grid gap-2 mt-2">
            <Label>Telefono</Label>
            <Input
              id="telefono"
              name="telefono"
              // value={telefono}
              // onChange={onInputChange}
              placeholder="0000-0000"
              className="bg-white"
            />
          </div>
          
          <div className="grid gap-2 mt-6">
            <Label>Cedula</Label>
            <Input
              id="cedula"
              name="cedula"
              // value={cedula}
              // onChange={onInputChange}
              placeholder="0-0000-0000"
              className="bg-white"
            />
          </div>

          {/* <div className="grid gap-2 mt-6">
            <Label>Rol</Label>
            <Select
              value={rol.toString()}
              onValueChange={(value) => onInputChange({ target: { name: 'rol', value } })}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Selecciona el tipo de rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Roles</SelectLabel>
                  { 
                  roles.map((rol) => 
                    (
                        <SelectItem key={rol?.id_rol} value={rol?.id_rol.toString()}>
                          {rol?.nombre}
                        </SelectItem>
                    ))
                  }

                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}


        </div>
      </div>
      

      <div className="flex justify-center mt-15 gap-10">
        <Button onClick={() => (navigate("/dashboard/clients"))} type="button" className="w-50" >
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
