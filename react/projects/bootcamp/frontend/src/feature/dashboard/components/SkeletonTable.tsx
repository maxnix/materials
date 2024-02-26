import { Skeleton } from "@/components/ui/skeleton"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table"

const TableSkeletonRow = () => (
  <TableRow>
    <TableCell>
      <Skeleton className="h-4 w-[100px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-4 w-[200px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-4 w-[150px]" />
    </TableCell>
    <TableCell className="text-right">
      <Skeleton className="h-4 w-[100px]" />
    </TableCell>
  </TableRow>
)

export const TableSkeleton = ({ rows = 5 }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">
          <Skeleton className="h-4 w-[100px]" />
        </TableHead>
        <TableHead>
          <Skeleton className="h-4 w-[200px]" />
        </TableHead>
        <TableHead>
          <Skeleton className="h-4 w-[150px]" />
        </TableHead>
        <TableHead className="text-right">
          <Skeleton className="h-4 w-[100px]" />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Array.from({ length: rows }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableSkeletonRow key={i} />
      ))}
    </TableBody>
  </Table>
)
