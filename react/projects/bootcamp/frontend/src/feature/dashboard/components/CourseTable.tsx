import { createColumnHelper } from "@tanstack/react-table"
import { type CourseLevel } from "../constant/tablePlaceholder"

import { Badge } from "@/components/ui/badge"
import { GenericTable } from "./GenericTable"
import { useAppSelector } from "@/service/redux/hooks"
import { SimplifiedProfile } from "@/service/api/profile/parser"
import { TableSkeleton } from "./SkeletonTable"

const columnsHelper = createColumnHelper<SimplifiedProfile["courses"][number]>()

const columns = [
  columnsHelper.accessor(`Title`, {
    id: `Title`,
    header: `Title`,
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

  columnsHelper.accessor(`Lessons`, {
    id: `completed`,
    header: `Completed`,
    cell: (props) => (
      <div className="flex items-center justify-end">
        {Math.ceil(Math.random() * props.row.original.Lessons)}/
        {props.row.original.Lessons}
      </div>
    ),
  }),
]

export const CourseTable = () => {
  const { courses } = useAppSelector((state) => state.profile)
  if (!courses) return <TableSkeleton rows={3} />
  return (
    <div className="flex flex-col max-w-[1140px] mx-auto gap-4 w-full">
      <h2 className="text-xl font-regular">Corsi</h2>
      {courses && courses?.length > 0 ? (
        <GenericTable data={courses} columns={columns} />
      ) : (
        <div className="w-full h-14 flex justify-between items-center bg-green-50 px-6 rounded-md">
          <p>Nessun corso trovato</p>
        </div>
      )}
    </div>
  )
}
