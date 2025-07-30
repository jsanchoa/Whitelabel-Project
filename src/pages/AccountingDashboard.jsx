import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CustomTable from "@/components/customs/c_simpleTable"
import AccChart from "@/components/accounting/Acc_Chart"

const chartData = [
  { date: "2025-04-01", incomes: 222, outcomes: 150 },
  { date: "2025-04-02", incomes: 97, outcomes: 180 },
  { date: "2025-04-03", incomes: 167, outcomes: 120 },
  { date: "2025-06-30", incomes: 446, outcomes: 400 },
]

export const AccountingDashboard = () => {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  const incomesData = filteredData.map((item) => ({
    date: item.date,
    amount: item.incomes,
  }));

  const outcomesData = filteredData.map((item) => ({
    date: item.date,
    amount: item.outcomes,
  }));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Accounting Dashboard</h1>
       <p className="mb-6">
        The Accounting Dashboard provides an overview of your financial data, including incomes and outcomes over the selected time period. 
        Use the time filters to adjust the range and view detailed tables and charts for better financial analysis.
      </p>
      <div className="grid grid-cols-1 gap-6">
        
        <div className="mt-6">
          <AccChart data={filteredData} />
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
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-2">Incomes</h2>
            <CustomTable data={incomesData} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Outcomes</h2>
            <CustomTable data={outcomesData} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AccountingDashboard;
