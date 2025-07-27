import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export const ProvidersTableMini = () => {
  const topProviders = [
    { name: "Tech Supplies Co.", type: "Electronics", purchases: 3 },
    { name: "Costa Hardware", type: "Construction", purchases: 2 },
    { name: "Fresh Produce Inc.", type: "Mango Crates", purchases: 2 },
    { name: "Organic Farms", type: "Agriculture", purchases: 2 },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Purchases</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topProviders.map((provider, index) => (
          <TableRow key={index}>
            <TableCell>{provider.name}</TableCell>
            <TableCell>{provider.type}</TableCell>
            <TableCell>{provider.purchases}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};