import {Button} from '@/components/ui/button'
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

export const RegisterSaleButton = () => {

  const navigate = useNavigate();

  return (
    <Button
      type="button"
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
      onClick={() => navigate("/sales/add")}
    >
      <Plus size={18} />
      Register Sale
    </Button>
  );
}
