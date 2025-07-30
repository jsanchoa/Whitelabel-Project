/*import { Filter } from "lucide-react";
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
      Filter by
    </Button>
  );
}*/

import React, { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
//import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FilterButton({ options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedOptions((prevState) =>
      prevState.includes(value)
        ? prevState.filter((option) => option !== value)
        : [...prevState, value]
    );
  };

  const handleConfirm = () => {
    console.log("Selected options:", selectedOptions);

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md">
          <Filter size={18} />
          Filter by
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filter Options</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              
              <label htmlFor={`checkbox-${index}`} className="ml-2">
                {option.value}
              </label>
            </div>
          ))}
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
