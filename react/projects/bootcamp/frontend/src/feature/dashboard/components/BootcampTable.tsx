import { createColumnHelper } from "@tanstack/react-table"
import {
  BootcampTablePlaceholderItem,
  bootcampTablePlaceholder,
} from "../constant/tablePlaceholder"
import { GenericTable } from "./GenericTable"

const columnsHelper = createColumnHelper<BootcampTablePlaceholderItem>()

const columns = [
  columnsHelper.accessor(`name`, {
    id: `name`,
    header: `Name`,
  }),
  columnsHelper.display({
    id: `Location`,
    header: `Location`,
    cell: ({ row }) => (
      <div className="flex items-center">{row.original.location}</div>
    ),
  }),
  columnsHelper.accessor(`startDate`, {
    id: `completed`,
    header: `Completed`,
    cell: ({ row }) => (
      <div className="flex justify-end">{row.original.startDate}</div>
    ),
  }),
]

export const BootcampTable = () => (
  <div className="flex flex-col max-w-[1140px] mx-auto gap-4">
    <h2 className="text-xl font-regular">Bootcamp</h2>
    <GenericTable data={bootcampTablePlaceholder} columns={columns} />
  </div>
)
