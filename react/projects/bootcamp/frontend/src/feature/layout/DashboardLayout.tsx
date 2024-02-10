import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { PublicLayout } from "./PublicLayout"

export const DashboardLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/app/dashboard`, { replace: true })
  }, [navigate])
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}
