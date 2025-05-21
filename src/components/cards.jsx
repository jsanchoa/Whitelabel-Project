import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUpIcon } from "lucide-react";

export const CardsTest = ({ data }) => {
  return (
    <>
      <div className=" flex flex-row justify-center m-5 gap-12">
        {data.map((item) => (
          <Card key={item.Title} className="@container/card basis-74">
            <CardHeader className="relative">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                ${item.Amount}
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +xx.x%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {item.State} <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">{item.Visitors}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};
