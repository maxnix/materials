import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { PublicLayout } from "./PublicLayout"

export const DashboardLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isAppRoutes =
    location.pathname === `/app` || location.pathname === `/app/`
  useEffect(() => {
    if (isAppRoutes) navigate(`/app/dashboard`, { replace: true })
  }, [navigate, isAppRoutes])
  return (
    <PublicLayout>
      <div className="w-full h-16 nac-spacer" />
      <Outlet />
    </PublicLayout>
  )
}
