import { createColumnHelper } from "@tanstack/react-table"
import {
  courseTablePlaceholder,
  type CourseTablePlaceholderItem,
  type CourseLevel,
} from "../constant/tablePlaceholder"

import { Badge } from "@/components/ui/badge"
import { GenericTable } from "./GenericTable"

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

export const CourseTable = () => (
  <div className="flex flex-col max-w-[1140px] mx-auto gap-4">
    <h2 className="text-xl font-regular">Corsi</h2>
    <GenericTable data={courseTablePlaceholder} columns={columns} />
  </div>
)
