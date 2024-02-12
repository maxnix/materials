import { useGetProfileQuery } from "@/service/api/profile"
import { BootcampTable } from "../components/BootcampTable"
import { CourseTable } from "../components/CourseTable"

export const DashboardPage = () => {
  useGetProfileQuery()

  return (
    <div className="max-w-[1140px] mx-auto">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex flex-col gap-12 mt-4">
        <section>
          <CourseTable />
        </section>
        <section>
          <BootcampTable />
        </section>
      </div>
    </div>
  )
}
