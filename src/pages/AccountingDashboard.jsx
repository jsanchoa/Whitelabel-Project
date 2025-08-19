//import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CustomTable from "@/components/customs/c_simpleTable"
import AccChart from "@/components/accounting/Acc_Chart"
import React, { useState, useEffect } from 'react';




export const AccountingDashboard = () => {
  const [timeRange, setTimeRange] = React.useState("90d")


  //Hook to save my data
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [accountingData, setAccountingData] = useState([]);

  //useEffect funciona para cargar la funcion cada vez que renderiza la pagina
  useEffect(() => {
    getIncomesList();
  }, []);

  useEffect(() => {
    getExpensesList();
  }, []);
  useEffect(() => {
    getAccountingDataList();
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

  const getExpensesList = async () => {

    try {
      // Variable for wait the get response and then save it into categories useState hook
      const response = await api.get('http://localhost:3000/v1/expenses/list');
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }

  };
  const getAccountingDataList = async () => {

    try {
      // Variable for wait the get response and then save it into categories useState hook
      const response = await api.get('http://localhost:3000/v1/accountingdata/list');
      setAccountingData(response.data);
    } catch (error) {
      console.log(error);
    }

  };


  const chartData = accountingData.filter((item) => {
    const date = new Date(item.Accounting_Date)
    const referenceDate = new Date("2025-08-19")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
  }});

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Accounting Dashboard</h1>
      <p className="mb-6">
        The Accounting Dashboard provides an overview of your financial data, including incomes and expenses over the selected time period.
        Use the time filters to adjust the range and view detailed tables and charts for better financial analysis.
      </p>
      <div className="grid grid-cols-1 gap-6">

        <div className="mt-6">
          <AccChart data={accountingData} />
        </div>

        <div className="flex justify-center mb-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[160px] rounded-lg">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <CustomTable data={incomes} title={"Incomes"} />
          </div>
          <div>
            <CustomTable data={expenses} title={"Expenses"} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AccountingDashboard;
