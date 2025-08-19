import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function RegisterProductButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("inventory/products/add");
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <Plus size={18} />
      Register Product
    </Button>
  );
}