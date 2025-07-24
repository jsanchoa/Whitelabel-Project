import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RegisterPurchaseButton() {
  const handleClick = () => {
    console.log("Register purchase clicked");
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <Plus size={18} />
      Register Purchase
    </Button>
  );
}