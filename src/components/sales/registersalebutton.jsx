import {Button} from '@/components/ui/button'
import { Plus } from 'lucide-react';

export const RegisterSaleButton = () => {

  return (
    <Button
      type="button"
      className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <Plus size={18} />
      Register Sale
    </Button>
  );
}
