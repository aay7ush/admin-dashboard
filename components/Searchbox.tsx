import { Search } from "lucide-react"
import { Input } from "./ui/input"

export default function Searchbox() {
  return (
    <div className="relative">
      <Input placeholder="Search..." className="w-80" />
      <Search className="absolute right-2 top-2.5 w-5 h-5 text-muted-foreground" />
    </div>
  )
}
