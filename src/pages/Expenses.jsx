import React from 'react';

import CEditableTable from "@/components/customs/c_EditableTable";
import {ActionPanel} from "@/components/customs/c_actionPanel"

const expenses = [
  {
    id: 1,
    date: "2025-04-01",
    amount: 222,
    description: "Sale of goods",
    name: "Department Store",
    status: "Active"
  },
  {
    id: 2,
    date: "2025-04-02",
    amount: 97,
    description: "Consulting income",
    name: "Consulting ABC",
    status: "Active"
  },
  {
    id: 3,
    date: "2025-04-03",
    amount: 167,
    description: "Advertising income",
    name: "Ad Agency XYZ",
    status: "Cancelled"
  },

];

export const Expenses = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Expenses</h1>
      
      <div className="m-8">
        <div>
          <ActionPanel/>
        </div>


        <div>
          <CEditableTable data={expenses} title="Expenses registered" />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
