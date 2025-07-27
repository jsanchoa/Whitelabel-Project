import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow } 
    from "@/components/ui/table";

export const ProvidersTableMini = () => {
  const providers = [
    { name: "Tech Supplies Co.", type: "Electronics" },
    { name: "Costa Hardware", type: "Construction" },
    { name: "Organic Farms", type: "Agriculture" },
    { name: "Pura Vida Logistics", type: "Transport" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {providers.map((provider, index) => (
          <TableRow key={index}>
            <TableCell>{provider.name}</TableCell>
            <TableCell>{provider.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};