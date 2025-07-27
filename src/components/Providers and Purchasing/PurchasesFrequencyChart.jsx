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
  // Providers and the number of purchases made to each
  const rawData = [
    { provider: "Tech Supplies Co.", count: 3 },
    { provider: "Organic Farms", count: 2 },
    { provider: "Costa Hardware", count: 2 },
    { provider: "Fresh Produce Inc.", count: 2 },
    { provider: "Global Textiles", count: 1 },
    { provider: "EduTech Supplies", count: 1 },
    { provider: "Pura Vida Logistics", count: 1 },
    { provider: "ElectroMax Solutions", count: 1 },
    { provider: "Sustainable Solutions", count: 1 },
  ];

   // Sort providers from highest to lowest purchase count
  const data = rawData.sort((a, b) => b.count - a.count);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="provider" />
        <YAxis allowDecimals={false} />
        <Tooltip formatter={(value) => `${value} purchases`} />
        <Bar dataKey="count" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  );
}