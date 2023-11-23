"use client"

import { BellRing, Globe, MessageSquare, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { Input } from "./ui/input"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between bg-primary text-white rounded-lg p-3 items-center">
      <p className="font-medium capitalize text-lg">
        {pathname.split("/").pop()}
      </p>

      <div className="flex gap-5 items-center">
        <div className="relative">
          <Input placeholder="Search..." className="w-64" />
          <Search className="absolute right-2 top-2.5 w-5 h-5 text-muted-foreground" />
        </div>

        <div className="flex gap-3">
          <MessageSquare />
          <BellRing />
          <Globe />
        </div>
      </div>
    </div>
  )
}
