import { createColumnHelper } from "@tanstack/react-table"

import { GenericTable } from "./GenericTable"
import { useAppSelector } from "@/service/redux/hooks"
import { SimplifiedProfile } from "@/service/api/profile/parser"
import { TableSkeleton } from "./SkeletonTable"

const columnsHelper =
  createColumnHelper<SimplifiedProfile["bootcamps"][number]>()

const columns = [
  columnsHelper.accessor(`Title`, {
    id: `Title`,
    header: `Title`,
  }),

  columnsHelper.accessor(`Starts`, {
    id: `Starts`,
    header: `Starts`,
    cell: ({ row }) => (
      <div className="flex justify-start">
        {new Date(row.original.Starts).toLocaleDateString()}
      </div>
    ),
  }),
  columnsHelper.display({
    id: `isRemote`,
    header: `isRemote`,
    cell: ({ row }) => {
      if (row.original.isRemote) {
        return (
          <div className="flex justify-end ">
            <span className="bg-green-400 h-4 w-4 rounded-xl" />
          </div>
        )
      }
      return (
        <div className="flex justify-end ">
          <span className="bg-red-400 h-4 w-4 rounded-xl" />
        </div>
      )
    },
  }),
]

export const BootcampTable = () => {
  const { bootcamps } = useAppSelector((state) => state.profile.profile) || {}
  if (!bootcamps) return <TableSkeleton rows={3} />
  return (
    <div className="flex flex-col max-w-[1140px] mx-auto gap-4 w-full">
      <h2 className="text-xl font-regular">Bootcamp</h2>
      {bootcamps && bootcamps?.length > 0 ? (
        <GenericTable data={bootcamps!} columns={columns} />
      ) : (
        <div className="w-full h-14 flex justify-between items-center bg-yellow-50 px-6 rounded-md">
          <p>Nessun bootcamp trovato</p>
        </div>
      )}
    </div>
  )
}
