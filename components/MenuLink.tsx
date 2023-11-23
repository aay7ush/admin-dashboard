"use client"

import { cn } from "@/lib/utils"
import { MenuLinkProps } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MenuLink({ title, path, icon }: MenuLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={cn(
        "text-sm flex gap-2 text-secondary-foreground transition duration-200 hover:text-primary hover:bg-primary-foreground p-2 rounded-lg",
        path === pathname && "bg-primary-foreground text-primary"
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  )
}
