/*import React from 'react';

const DynamicTable = ({ data }) => {
  
  // Extrae los encabezados
  const headers = Object.keys(data[0]);

  return (
    <table >
      <thead>
        <tr className='text-center'>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {headers.map((header) => (
              <td  className='text-center' key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;




*/







import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const data = [
  {
    name: "Tech Supplies Co.",
    businesstype: "Electronics",
    accountnumber: "ACC-123456",
    address: "123 Main St, San José",
    status: "Active",
  },
  {
    name: "Global Textiles",
    businesstype: "Textiles",
    accountnumber: "ACC-654321",
    address: "456 Cotton Ave, Cartago",
    status: "Inactive",
  },
];

const DynamicTable = ({ data }) => {
  const headers = Object.keys(data[0]);

  return (
    <Table className="rounded-[12px] w-[90%]">
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index} className="text-center"><b>{header}</b></TableHead>
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
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Custom_Table = ({data}) => {
  return (
    <div className="flex justify-center m-8">
      <div>
        <DynamicTable data={data} />
      </div>
    </div>
  );
};

export default Custom_Table;
