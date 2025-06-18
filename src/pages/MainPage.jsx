import { CardsTest } from "../components/inventory/inventorycards";
import { TableTest } from "../components/inventory/inventorytable";

export const MainPage = () => {
  const data = {
    cards: [
      {
        Title: "Total Revenue",
        Amount: 1250.0,
        State: "Trending up this month",
        Visitors: "Visitors for the last 6 months",
      },
      {
        Title: "Total Pricepool",
        Amount: 3000.0,
        State: "Trending down this month",
        Visitors: "Visitors for the last 12 months",
      },
      {
        Title: "Total Happyness",
        Amount: 2000.0,
        State: "Trending mid this month",
        Visitors: "Visitors for the last 8 months",
      },
      {
        Title: "Total Sadness",
        Amount: 5000.0,
        State: "Trending mid this month",
        Visitors: "Visitors for the last 8 months",
      },
    ],
  };

  return (
    <>
      <CardsTest data={data.cards} />
      <TableTest />
    </>
  );
};
