import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import {
  courseTablePlaceholder,
  type CourseTablePlaceholderItem,
  type CourseLevel,
} from "../constant/tablePlaceholder"
import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const columnsHelper = createColumnHelper<CourseTablePlaceholderItem>()

const columns = [
  columnsHelper.accessor(`name`, {
    id: `name`,
    header: `Name`,
  }),
  columnsHelper.display({
    id: `level`,
    header: `Level`,
    cell: (row) => {
      const bedgeStyle: Record<Lowercase<CourseLevel>, string> = {
        beginner: `bg-blue-100 text-blue-800`,
        intermediate: `bg-yellow-100 text-yellow-800`,
        advanced: `bg-green-100 text-green-800`,
      }
      return (
        <div className="flex items-center">
          <Badge
            variant="secondary"
            className={
              bedgeStyle[
                row.row.original.level.toLowerCase() as Lowercase<CourseLevel>
              ]
            }
          >
            {row.row.original.level}
          </Badge>
        </div>
      )
    },
  }),

  columnsHelper.accessor(`completed`, {
    id: `completed`,
    header: `Completed`,
    cell: (props) => (
      <div className="flex items-center justify-end">
        {props.row.original.completed}/{props.row.original.lessons}
      </div>
    ),
  }),
]

export const CourseTable = () => {
  const table = useReactTable({
    columns,
    data: courseTablePlaceholder,
    getCoreRowModel: getCoreRowModel<CourseTablePlaceholderItem>(),
  })

  return (
    <Table className="max-w-[1140px] mx-auto border">
      <TableHeader className="bg-slate-50">
        {table.getHeaderGroups().map((header) => (
          <TableRow
            key={header.id}
            className="grid items-center justify-end grid-cols-3"
          >
            {header.headers.map((headerItem) => (
              <TableHead
                key={headerItem.id}
                className={`w-full flex justify-${headerItem.index === header.headers.length - 1 ? `end` : `start`} items-center`}
              >
                {headerItem.isPlaceholder
                  ? null
                  : flexRender(
                      headerItem.column.columnDef.header,
                      headerItem.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="grid items-center grid-cols-3 cursor-pointer"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="w-full">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow className="cursor-pointer">
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
