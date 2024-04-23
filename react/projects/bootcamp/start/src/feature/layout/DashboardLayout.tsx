import { Outlet } from "react-router-dom"
import { PublicLayout } from "./PublicLayout"

export const DashboardLayout = () => (
  <PublicLayout>
    <div className="w-full h-16 nac-spacer" />
    <Outlet />
  </PublicLayout>
)
