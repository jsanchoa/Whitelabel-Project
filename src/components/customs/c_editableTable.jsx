import React from 'react';
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

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Pencil, Trash2 } from "lucide-react";


const DynamicTable = ({ data, title }) => {

  if (data.lenght > 1) {



    const headers = Object.keys(data[0]);

    return (

      <div className="flex justify-center">
        <Card>
          <CardHeader>
            <CardTitle><b>{title}</b></CardTitle>
          </CardHeader>
          <CardContent>

            <Table className="rounded-[12px] w-[1250px]">
              <TableHeader>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHead key={index} className="text-center">{header}</TableHead>
                  ))}
                  <TableHead className="w-[150px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {headers.map((header, cellIndex) => (
                      <TableCell key={cellIndex} className="text-center">{row[header]}</TableCell>
                    ))}
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
                              This action cannot be undone. This will permanently delete this provider from your records.
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

          </CardContent>
        </Card>
      </div>




    );
  } else {
    return(
      <h1 className="text-3xl font-bold mb-4">No se han encontrado resultados</h1>
    );
  }
};

export const EditableTable = ({ data, title }) => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <DynamicTable data={data} title={title} />
      </div>
    </div>
  );
};

export default EditableTable;

