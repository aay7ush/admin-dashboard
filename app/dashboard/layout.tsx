import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="grid grid-cols-[1fr_4fr] max-w-7xl mx-auto px-2.5 md:p-5">
      <section>
        <Sidebar />
      </section>
      <section>
        <Navbar />
        {children}
      </section>
    </article>
  )
}
