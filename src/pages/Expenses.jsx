//import React from 'react';
import React, { useState, useEffect } from 'react';
import CEditableTable from "@/components/customs/c_EditableTable";
import {ActionPanel} from "@/components/customs/c_actionPanel"



export const Expenses = () => {

  //Hook to save my data
  const [expenses, setExpenses] = useState([]);

    useEffect(() => {
      getExpensesList();
    }, []);

      const getExpensesList = async () => {

    try {
      // Variable for wait the get response and then save it into categories useState hook
      const response = await api.get('http://localhost:3000/v1/expenses/list');
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }

  };


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
