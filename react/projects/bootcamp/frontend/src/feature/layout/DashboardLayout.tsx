import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { PublicLayout } from "./PublicLayout"
import { useLazyGetProfileQuery } from "@/service/api/profile"

export const DashboardLayout = () => {
  const [getProfile] = useLazyGetProfileQuery()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const isAppRoutes = pathname === `/app` || pathname === `/app/`

  useEffect(() => {
    if (isAppRoutes) {
      navigate(`/app/dashboard`, { replace: true })
    }
    getProfile()
  }, [isAppRoutes, navigate, getProfile])
  return (
    <PublicLayout>
      <div className="w-full h-16 nav-spacer" />
      <Outlet />
    </PublicLayout>
  )
}
