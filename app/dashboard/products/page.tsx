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

export default function ProductsPage() {
  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <Searchbox />

        <Button>Add New</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="whitespace-nowrap">Created At</TableHead>
            <TableHead>Stock</TableHead>
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
                      <AvatarImage src="https://github.com/random.png" />
                      <AvatarFallback>IP</AvatarFallback>
                    </Avatar>

                    <p className="font-medium">IPhone</p>
                  </div>
                </TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus eligendi reiciendis inventore velit! Esse facilis quod
                  possimus mollitia culpa velit.
                </TableCell>
                <TableCell>$999</TableCell>
                <TableCell>13.01.2022</TableCell>
                <TableCell>72</TableCell>
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
