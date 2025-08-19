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
import { useFormHook } from "@/hooks/use-hook";

export const CategoriesAdd = () => {
  const navigate = useNavigate();

  const { image, name, description, onInputChange } = useFormHook({
      image: "",
      name: "",
      description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      toast.error("La descripción es obligatoria");
      return;
    }

    const payload = {
      image: image.trim(),
      name: name.trim(),
      description: description.trim(),
    };

    try {
      await api.post("http://localhost:3000/v1/categories/add", payload);
      toast.success("Category has been created successfully");
      navigate("/inventory/categories");
    } catch (error) {
      toast.error("Category could not be created");
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
          <Label>Image</Label>
          <Input
            className="bg-white"
            name="image"
            value={image}
            onChange={onInputChange}
            placeholder="image.jpg"
            maxLength={30}
            required
          />
        </div>

        <div className="grid gap-2 mt-2 mb-4">
          <Label>Name</Label>
          <Input
            className="bg-white"
            name="name"
            value={name}
            onChange={onInputChange}
            placeholder="S.A Eletronics"
            maxLength={30}
            required
          />
        </div>

        <div className="grid gap-2 mt-2 mb-4">
          <Label>Description</Label>
          <Input
            className="bg-white"
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="e.g., Electronics"
            maxLength={30}
            required
          />
        </div>


        <div className="flex justify-center mt-15 gap-10">
          <Button onClick={() => navigate("/inventory/categories")} type="button" className="w-50">
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