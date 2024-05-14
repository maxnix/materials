import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
}

export const GenericTable = <TData,>({
  data,
  columns,
}: DataTableProps<TData>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table className=" border">
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
        {table.getRowModel().rows?.length ? (
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
            <TableCell colSpan={columns?.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
