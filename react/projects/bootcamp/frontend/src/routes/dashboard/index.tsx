import { Navigate, RouteObject } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { DashboardLayout } from "@/feature/layout/DashboardLayout"

const prefix = `/app/`

export const dashboardRoutes = (isLogged?: boolean): RouteObject[] => [
  {
    path: `${prefix}/`,
    element: isLogged ? (
      <DashboardLayout />
    ) : (
      <Navigate
        to="/"
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
    ],
  },
]
