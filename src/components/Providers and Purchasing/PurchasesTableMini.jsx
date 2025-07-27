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
    purchasenumber: "PUR-012",
    provider: "Sustainable Solutions",
    purchasedate: "2025-07-12",
    products: "Recycled Paper",
    quantity: 50,
    paymentmethod: "Credit Card",
    subtotal: "$122.64",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-013",
    provider: "Organic Farms",
    purchasedate: "2025-07-16",
    products: "Organic Tomatoes",
    quantity: 40,
    paymentmethod: "Bank Transfer",
    subtotal: "$245.28",
    status: "Completed",
  },
  {
    purchasenumber: "PUR-014",
    provider: "Tech Supplies Co.",
    purchasedate: "2025-07-21",
    products: "Computer Mice",
    quantity: 20,
    paymentmethod: "Credit Card",
    subtotal: "$471.70",
    status: "Pending",
  }
];
// 3 most recent ones

export const PurchasesTableMini = () => (
  <Table>
    <TableHeader>
  <TableRow>
    <TableHead className="text-center">Purchase Number</TableHead>
    <TableHead className="text-center">Provider</TableHead>
    <TableHead className="text-center">Purchase Date</TableHead>
    <TableHead className="text-center">Products</TableHead>
    <TableHead className="text-center">Quantity</TableHead>
    <TableHead className="text-center">Payment Method</TableHead>
    <TableHead className="text-center">Subtotal</TableHead>
    <TableHead className="text-center">Status</TableHead>
  </TableRow>
</TableHeader>
    <TableBody>
  {recentPurchases.map((p, i) => (
    <TableRow key={i}>
      <TableCell className="text-center">{p.purchasenumber}</TableCell>
      <TableCell className="text-center">{p.provider}</TableCell>
      <TableCell className="text-center">{p.purchasedate}</TableCell>
      <TableCell className="text-center">{p.products}</TableCell>
      <TableCell className="text-center">{p.quantity}</TableCell>
      <TableCell className="text-center">{p.paymentmethod}</TableCell>
      <TableCell className="text-center">{p.subtotal}</TableCell>
      <TableCell className="text-center">{p.status}</TableCell>
    </TableRow>
  ))}
</TableBody>
  </Table>
);