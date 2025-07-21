import { TrendingDown, AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function CardWithAlerts() {
  return (
    <Card className="@container/card min-w-[280px] flex-1">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          1,234
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="w-full pt-4 space-y-3">
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your updates were saved.</AlertDescription>
          </Alert>

          <Alert>
            <PopcornIcon />
            <AlertTitle>Low engagement this month</AlertTitle>
          </Alert>

          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              <ul className="list-inside list-disc text-sm">
                <li>Drop in signups</li>
                <li>Verify campaigns</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </CardFooter>
    </Card>
  )
}