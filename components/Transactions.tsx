import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

export default function Transactions() {
  return (
    <div>
      <h2 className="text-2xl mb-2 font-medium">Latest Transactions</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium">
          {["Paid", "Pending", "Cancelled"].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <p>Aayush Jaiswal</p>
              </TableCell>
              <TableCell key={index}>
                <span
                  className={cn("text-white py-1.5 px-3 rounded-sm", {
                    "bg-green-400": item === "Paid",
                    "bg-yellow-400": item === "Pending",
                    "bg-red-400": item === "Cancelled",
                  })}
                >
                  {item}
                </span>
              </TableCell>
              <TableCell>14. 02. 2024</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
