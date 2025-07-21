import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FilterButton() {
  const handleClick = () => {
    console.log("Filter clicked");
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <Filter size={18} />
      Filter by Category
    </Button>
  );
}