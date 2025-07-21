import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Pencil, Trash2 } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Devices and gadgets like mice, monitors, and webcams.",
  },
  {
    name: "Furniture",
    description: "Office furniture such as desks, chairs, and footrests.",
  },
  {
    name: "Accessories",
    description: "Peripheral devices and connectors for computers.",
  },
  {
    name: "Storage",
    description: "External and internal data storage solutions.",
  },
  {
    name: "Office Supplies",
    description: "Products used in office environments like whiteboards.",
  },
  {
    name: "Lighting",
    description: "Desk lamps and LED lighting solutions.",
  },
  {
    name: "Audio",
    description: "Headphones, microphones, and audio equipment.",
  },
  {
    name: "Video",
    description: "Projectors and webcams for visual presentations.",
  },
  {
    name: "Ergonomics",
    description: "Tools to improve posture and comfort at work.",
  },
  {
    name: "Displays",
    description: "Computer screens and high-definition monitors.",
  },
];

export const CategoriesTable = () => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <Table className="rounded-[12px] w-[1000px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button className="w-8 h-8">
                    <Pencil />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-8 h-8">
                        <Trash2 />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Delete Confirmation</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete this category from your database.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-center">
                        <DialogClose asChild>
                          <Button>Confirm</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};