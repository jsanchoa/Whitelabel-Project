import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, UserPlus } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "sonner";
import api from "@/api/api";

export const CategoriesAdd = () => {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("A"); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      toast.error("La descripción es obligatoria");
      return;
    }

    const payload = {
      description: description.trim(),
      status,
    };

    try {
      await api.post("http://localhost:3000/v1/categories/add", payload);
      toast.success("La categoría se registró correctamente");
      navigate("/categories/list");
    } catch (error) {
      toast.error("No se pudo registrar la categoría");
      console.error(error);
    }
  };

  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <form onSubmit={handleSubmit}>
        <p className="font-sans text-2xl flex justify-center font-medium mb-12">
          Add Category
        </p>

        <div className="grid gap-2 mt-2 mb-4">
          <Label>Description</Label>
          <Input
            className="bg-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Electronics"
            maxLength={30}
            required
          />
        </div>

        <div className="grid gap-2 mb-8">
          <Label>Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="A">Active</SelectItem>
                <SelectItem value="I">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center mt-15 gap-10">
          <Button onClick={() => navigate("/categories/list")} type="button" className="w-50">
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