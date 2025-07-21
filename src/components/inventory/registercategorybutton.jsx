import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RegisterCategoryButton() {
  const handleClick = () => {
    console.log("Register category clicked");
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <Plus size={18} />
      Register Category
    </Button>
  );
}