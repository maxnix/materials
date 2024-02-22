import { useAppSelector } from "@/service/redux/hooks"
import { BootcampTable } from "../components/BootcampTable"
import { CourseTable } from "../components/CourseTable"
import { LearnSection } from "../components/LearnSection"
import { useGetUserPaymentsQuery } from "@/service/api/profile"

export const DashboardPage = () => {
  const mail = useAppSelector((state) => state.profile.email)
  const { data: userPayments, error } = useGetUserPaymentsQuery({
    email: mail!,
  })

  return (
    <div className="max-w-[1140px] mx-auto">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <section className="flex flex-col gap-12 mt-4">
        <CourseTable />
        <BootcampTable />
      </section>
      <section className="mt-28">
        <LearnSection />
      </section>
      <div className="h-16" />
    </div>
  )
}
