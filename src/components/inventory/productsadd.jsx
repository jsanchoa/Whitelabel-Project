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
import { toast } from "sonner";
import api from "@/api/api";

export const ProductsAdd = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [providers, setProviders] = useState([]);

  const [categoryId, setCategoryId] = useState("");
  const [providerId, setProviderId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSku] = useState("");
  const [status, setStatus] = useState("A"); 

  useEffect(() => {
    listCategories();
    listProviders();
  }, []);

  const listCategories = async () => {
    try {
      const response = await api.get("http://localhost:3000/v1/categories/list");
      setCategories(response.data);
    } catch {
      toast.error("No se pudieron cargar las categorías");
    }
  };

  const listProviders = async () => {
    try {
      const response = await api.get("http://localhost:3000/v1/providers/list");
      setProviders(response.data);
    } catch {
      toast.error("No se pudieron cargar los proveedores");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryId || !providerId || !description.trim()) {
      toast.error("Categoría, Proveedor y Descripción son obligatorios");
      return;
    }

    const payload = {
      category_id: parseInt(categoryId),
      provider_id: parseInt(providerId),
      description: description.trim(),
      price: price === "" ? null : parseFloat(price),
      stock: stock === "" ? null : parseInt(stock),
      sku: sku.trim() || null,
      status,
    };

    try {
      await api.post("http://localhost:3000/v1/products/add", payload);
      toast.success("El producto se registró correctamente");
      navigate("/products/list");
    } catch (error) {
      toast.error("No se pudo registrar el producto");
      console.error(error);
    }
  };

  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <form onSubmit={handleSubmit}>
        <p className="font-sans text-2xl flex justify-center font-medium mb-12">
          Add Product
        </p>

        <div className="grid gap-2 mt-2 mb-4">
          <Label>Category</Label>
          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((cat) => (
                  <SelectItem
                    key={cat.category_id ?? cat.id}
                    value={(cat.category_id ?? cat.id).toString()}
                  >
                    {cat.description ?? cat.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2 mb-4">
          <Label>Provider</Label>
          <Select value={providerId} onValueChange={setProviderId}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Providers</SelectLabel>
                {providers.map((prov) => (
                  <SelectItem
                    key={prov.provider_id ?? prov.id}
                    value={(prov.provider_id ?? prov.id).toString()}
                  >
                    {prov.name ?? prov.provider_name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2 mb-4">
          <Label>Description</Label>
          <Input
            className="bg-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., USB-C Cable 1m"
            maxLength={30}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="grid gap-2">
            <Label>Price</Label>
            <Input
              className="bg-white"
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div className="grid gap-2">
            <Label>Stock</Label>
            <Input
              className="bg-white"
              type="number"
              min="0"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="grid gap-2">
            <Label>SKU</Label>
            <Input
              className="bg-white"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="Optional"
              maxLength={20}
            />
          </div>

          <div className="grid gap-2">
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
        </div>

        <div className="flex justify-center mt-15 gap-10">
          <Button onClick={() => navigate("/products/list")} type="button" className="w-50">
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