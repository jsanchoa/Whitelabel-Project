import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentPurchases = [
  {
    provider: "Tech Supplies Co.",
    date: "2024-01-15",
    product: "Wireless Mouse",
    quantity: 2,
    method: "Credit Card",
    subtotal: "₡25,500",
    status: "Completed",
  },
  // Agrega solo algunos recientes
];

export const PurchasesTableMini = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Provider</TableHead>
        <TableHead>Purchase Date</TableHead>
        <TableHead>Products</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Payment Method</TableHead>
        <TableHead>Subtotal</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {recentPurchases.map((p, i) => (
        <TableRow key={i}>
          <TableCell>{p.provider}</TableCell>
          <TableCell>{p.date}</TableCell>
          <TableCell>{p.product}</TableCell>
          <TableCell>{p.quantity}</TableCell>
          <TableCell>{p.method}</TableCell>
          <TableCell>{p.subtotal}</TableCell>
          <TableCell>{p.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);