import React from 'react';

import CEditableTable from "@/components/customs/c_EditableTable";


const incomes = [
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

export const Income = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Incomes</h1>
      <p className="mb-6">
        This page provides an overview of all the invoices generated in the system. Here, you can view, modify, or logically delete (cancel) any invoice. The table below lists all the income records, including the date, amount, description, and the name of the person or business associated with each transaction. Use the edit button to modify an invoice or the trash icon to cancel it.
      </p>
      <div className="flex justify-center m-8">
        
        <div>
          <CEditableTable data={incomes} />
        </div>
      </div>
    </div>
  );
};

export default Income;
