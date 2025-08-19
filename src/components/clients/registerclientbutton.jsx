import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function RegisterClientButton() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/clients/add")
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <Plus size={18} />
      Register Client
    </Button>
  );
}