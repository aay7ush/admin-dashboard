import { PlayCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription } from "./ui/card"

export default function Rightbar() {
  return (
    <div className="sticky top-4">
      <Card>
        <CardContent className="p-5 space-y-3">
          <p>🔥 Availabe Now</p>
          <p className="text-lg leading-tight font-medium">
            How to use the new version of the admin dashboard?
          </p>
          <p>Takes 4 minutes to learn</p>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, ut
            nam vero ratione suscipit quia illum quasi similique amet earum.
          </CardDescription>
          <Button className="flex gap-2">
            <PlayCircle />
            <span>Watch</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
