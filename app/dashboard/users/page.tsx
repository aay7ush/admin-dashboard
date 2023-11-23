import Searchbox from "@/components/Searchbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UsersPage() {
  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <Searchbox />

        <Button>Add New</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex gap-3 items-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <p className="font-medium">Aayush</p>
                  </div>
                </TableCell>
                <TableCell>aay7ush@gmail.com</TableCell>
                <TableCell>Oct 30 2023</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Active</TableCell>
                <TableCell className="flex gap-3">
                  <Button className="bg-green-600" size="sm">
                    View
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
