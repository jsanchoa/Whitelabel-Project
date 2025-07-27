import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function PurchasesFrequencyChart() {
  const data = [
    { provider: "Tech Supplies Co.", count: 2 },
    { provider: "Global Textiles", count: 2 },
    { provider: "Costa Hardware", count: 2 },
    { provider: "Organic Farms", count: 2 },
    { provider: "Pura Vida Logistics", count: 2 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="provider" />
        <YAxis allowDecimals={false} />
        <Tooltip formatter={(value) => `${value} compras`} />
        <Bar dataKey="count" fill="#000000ff" />
      </BarChart>
    </ResponsiveContainer>
  );
}