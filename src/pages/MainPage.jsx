import { ReportingDashboardCards } from "../components/dashboard/ReportingDashboardCards"

export const MainPage = () => {
  const sells = {
    day: 2400,
    week: 14800,
    month: 58500,
    changeDay: 12.5,
    changeWeek: -3.1,
    changeMonth: 9.2,
  }

  const topProducts = [
    { name: "Wireless Mouse", quantity: 120 },
    { name: "Laptop Stand", quantity: 90 },
    { name: "HDMI Cable", quantity: 75 },
  ]

  const clients = {
    total: 1500,
    active: 624,
  }

  const inventoryStock = [
    { name: "USB-C Hub", stock: 3 },
    { name: "External SSD", stock: 1 },
  ]

  return (
    <ReportingDashboardCards
      sells={sells}
      topProducts={topProducts}
      clients={clients}
      inventoryStock={inventoryStock}
      showEmptyCards={true} // pass a flag to include 2 extra empty cards
    />
  )
}