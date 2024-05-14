import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { PublicLayout } from "./PublicLayout"
import { useLazyGetProfileQuery } from "@/service/api/profile"

export const DashboardLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [getProfile] = useLazyGetProfileQuery()
  const isAppRoutes =
    location.pathname === `/app` || location.pathname === `/app/`
  useEffect(() => {
    if (isAppRoutes) navigate(`/app/dashboard`, { replace: true })
    getProfile()
  }, [navigate, isAppRoutes, getProfile])
  return (
    <PublicLayout>
      <div className="w-full h-16 nav-spacer" />
      <Outlet />
    </PublicLayout>
  )
}
