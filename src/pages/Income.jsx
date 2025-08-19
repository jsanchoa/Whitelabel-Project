//import React from 'react';

import CEditableTable from "@/components/customs/c_EditableTable";
import React, { useState, useEffect } from 'react';



export const Income = () => {


//Hook to save my data
  const [incomes, setIncomes] = useState([]);

    //useEffect funciona para cargar la funcion cada vez que renderiza la pagina
    useEffect(() => {
      getIncomesList();
    }, []);

    // Functions to get Incomes and Expenses
  const getIncomesList = async () => {

    try {
      // Variable for wait the get response and then save it into categories useState hook
      const response = await api.get('http://localhost:3000/v1/incomes/list');
      setIncomes(response.data);
    } catch (error) {
      console.log(error);
    }

  };



  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Incomes</h1>
      <p className="mb-6">
        This page provides an overview of all the invoices generated in the system. Here, you can view, modify, or logically delete (cancel) any invoice. The table below lists all the income records, including the date, amount, description, and the name of the person or business associated with each transaction. Use the edit button to modify an invoice or the trash icon to cancel it.
      </p>
      <div className="flex justify-center m-8">
        
        <div>
          <CEditableTable data={incomes} title={"Incomes registered"} />
        </div>
      </div>
    </div>
  );
};

export default Income;
