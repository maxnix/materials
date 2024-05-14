import { Link, useNavigate } from "react-router-dom"
import { useCallback } from "react"
import { Button } from "@/components/ui/button/button"
import { Toaster } from "@/components/ui/toast"
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks"
import { logout } from "@/service/redux/slice/auth"

export const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <nav className="fixed top-0 right-0 w-full z-10">
      <div className="flex flex-row justify-between items-center w-full h-16">
        <MenuActions />
      </div>
    </nav>
    <main>{children}</main>
    <Toaster />
  </>
)

const PublicMenuActions = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row justify-end items-center gap-4 w-full h-16 px-8">
      <Button
        className="w-fit"
        variant="ghost"
        onClick={() => navigate(`/auth/login`)}
      >
        Accedi
      </Button>
      <Button className="w-fit" onClick={() => navigate(`/auth/register`)}>
        Registrati
      </Button>
    </div>
  )
}

const AuthMenuActions = () => {
  const dispatch = useAppDispatch()
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch])
  const navigate = useNavigate()
  return (
    <div className="flex flex-row justify-between w-full items-center gap-4 h-16 bg-white px-8">
      <Link to="/app/dashboard">
        <Button variant="link">Go to Dashboard</Button>
      </Link>
      <div className="flex flex-row justify-end items-center gap-4 h-16">
        <Button
          variant={`secondary`}
          className="w-fit"
          onClick={() => navigate(`/app/profile/transactions`)}
        >
          Profilo
        </Button>
        <Button className="w-fit" variant="ghost" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}

const MenuActions = () => {
  const token = useAppSelector((state) => state.auth.token)
  if (token) return <AuthMenuActions />
  return <PublicMenuActions />
}
