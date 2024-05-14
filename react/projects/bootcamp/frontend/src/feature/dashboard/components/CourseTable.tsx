import { createColumnHelper } from "@tanstack/react-table"
import { SimplifiedProfile } from "@/service/api/profile/parser"
import { Badge } from "@/components/ui/badge"
import { useAppSelector } from "@/service/redux/hooks"
import { GenericTable } from "./GenericTable"
import { TableSkeleton } from "./SkeletonTable"

type CourseType = SimplifiedProfile["courses"][number]
export type CourseLevel = "beginner" | "intermediate" | "advanced"

const columnHelper = createColumnHelper<CourseType>()

const columns = [
  columnHelper.accessor(`Title`, {
    id: `Title`,
    header: `Title`,
  }),
  columnHelper.display({
    id: `level`,
    header: `Level`,
    cell: (row) => {
      const courseStyle: Record<CourseLevel, string> = {
        beginner: `bg-blue-100 text-blue-800`,
        intermediate: `bg-yellow-100 text-yellow-800`,
        advanced: `bg-green-100 text-green-800`,
      }
      return (
        <div className="flex items-center">
          <Badge
            variant="secondary"
            className={courseStyle[row.row.original.level as CourseLevel]}
          >
            {row.row.original.level}
          </Badge>
        </div>
      )
    },
  }),
  columnHelper.accessor(`Lessons`, {
    id: `completed`,
    header: `Completed`,
    cell: (row) => (
      <div className="flex items-center justify-end">
        {Math.ceil(Math.random() * row.row.original.Lessons)} /{` `}
        {row.row.original.Lessons}
      </div>
    ),
  }),
]

export const CourseTable = () => {
  const profile = useAppSelector((state) => state.profile.profile)
  const courses = profile?.courses
  if (!courses) return <TableSkeleton rows={3} />
  return (
    <div className="flex flex-col max-w-[1140px] mx-auto gap-4 w-full">
      <h2 className="text-2xl font-semibold">Courses</h2>
      {courses && courses.length > 0 ? (
        <GenericTable data={courses} columns={columns} />
      ) : (
        <p>No courses found</p>
      )}
    </div>
  )
}
