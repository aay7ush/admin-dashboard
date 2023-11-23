import { Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

export default function DashboardCard() {
  return (
    <Card className="cursor-pointer transition duration-200 hover:bg-primary-foreground">
      <CardContent className="p-4 flex gap-3">
        <Users className="w-10 h-10" />
        <div className="space-y-3">
          <p>Total Users</p>
          <CardTitle>10.273</CardTitle>
          <CardDescription>
            <span className="font-bold text-green-600">12%</span> more than
            previous week
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}
