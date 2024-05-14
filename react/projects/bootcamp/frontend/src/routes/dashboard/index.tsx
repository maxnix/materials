import { LoaderFunctionArgs, Navigate, RouteObject } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { DashboardLayout } from "@/feature/layout/DashboardLayout"
import { courseApi } from "@/service/api/course"
import { bootcampApi } from "@/service/api/bootcamp"
import { SingleCoursePage } from "@/feature/course/pages/SingleCoursePage"
import { store } from "@/service/redux/store"
import { TransactionTab } from "@/feature/profile/components/TransactionTab"
import { ProfileInfoTab } from "@/feature/profile/components/InfoTab"
import { BootcampRoute } from "./BootcampRoute"
import { ProfileRoute } from "./ProfileRoute"

const useCourseLoader = async ({
  params,
  request,
}: LoaderFunctionArgs<{ id: string }>) => {
  if (!params.id) return null
  const promise = store.dispatch(
    courseApi.endpoints.getCourse.initiate(params.id)
  )
  request.signal.onabort = () => promise.abort()
  const data = await promise
  return { ...data }
}

const useBootcampLoader = async ({
  params,
  request,
}: LoaderFunctionArgs<{ id: string }>) => {
  if (!params.id) return null
  const promise = store.dispatch(
    bootcampApi.endpoints.getBootcamp.initiate(params.id)
  )
  request.signal.onabort = () => promise.abort()
  const data = await promise
  return { ...data, refetch: promise.refetch }
}

export type BootcampLoaderData = {
  data: Awaited<ReturnType<typeof useBootcampLoader>>
}

const prefix = `/app/`

export const dashboardRoutes = (isLogged?: boolean): RouteObject[] => [
  {
    path: `${prefix}/`,
    element: isLogged ? (
      <DashboardLayout />
    ) : (
      <Navigate
        to="/auth/login"
        state={{
          from: `/app/`,
          message: `You need to be logged in to access this page`,
          status: `error`,
        }}
      />
    ),
    children: [
      {
        path: `dashboard`,
        element: <Dashboard />,
      },
      {
        path: `course/:id`,
        element: <SingleCoursePage />,
        loader: useCourseLoader,
      },
      {
        path: `bootcamp/:id`,
        element: <BootcampRoute />,
        loader: useBootcampLoader,
        shouldRevalidate: () => true,
      },
      {
        path: `profile`,
        element: <ProfileRoute />,
        children: [
          {
            path: `transactions`,
            element: <TransactionTab />,
          },
          {
            path: `info`,
            element: <ProfileInfoTab />,
          },
        ],
      },
    ],
  },
]
