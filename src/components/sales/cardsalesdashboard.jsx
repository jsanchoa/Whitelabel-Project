import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ShoppingCart, Users, AlertTriangle } from "lucide-react";

export const CardsSalesDashboard = () => {
  // Datos simulados (puedes reemplazarlos con data real del backend o TanStack Query)
  const sales = {
    day: 1200,
    week: 8400,
    month: 32800,
    changeDay: 8.2,
    changeWeek: -5.6,
    changeMonth: 12.7,
  };

  const topProducts = [
    { name: "Wireless Mouse", quantity: 120 },
    { name: "Gaming Keyboard", quantity: 85 },
    { name: "USB-C Hub", quantity: 74 },
  ];

  const clients = {
    total: 420,
    active: 310,
  };

  const inventoryStock = [
    { name: "Portable Projector", stock: 1 },
    { name: "Standing Desk", stock: 0 },
    { name: "Office Chair", stock: 2 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mx-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="text-green-600" /> Total Sales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Today: <span className="font-semibold">${sales.day.toLocaleString()}</span> <span className="text-green-600">(+{sales.changeDay}%)</span></p>
          <p className="text-sm">This week: <span className="font-semibold">${sales.week.toLocaleString()}</span> <span className="text-red-600">({sales.changeWeek}%)</span></p>
          <p className="text-sm">This month: <span className="font-semibold">${sales.month.toLocaleString()}</span> <span className="text-green-600">(+{sales.changeMonth}%)</span></p>
        </CardContent>
      </Card>

      {/* Productos más vendidos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="text-blue-600" /> Best Selling Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-1">
            {topProducts.map((p, i) => (
              <li key={i}>🔹 <span className="font-medium">{p.name}</span>: {p.quantity} Units</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Clientes / Usuarios activos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="text-purple-600" /> Clients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Registered Clients: <span className="font-semibold">{clients.total}</span></p>
          <p className="text-sm">Active Clients: <span className="font-semibold">{clients.active}</span></p>
        </CardContent>
      </Card>

      {/* Inventario bajo / agotado */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="text-yellow-600" /> Critical Stock Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-1">
            {inventoryStock.map((prod, idx) => (
              <li key={idx}>⚠️ <span className="font-medium">{prod.name}</span> - Stock: {prod.stock}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};