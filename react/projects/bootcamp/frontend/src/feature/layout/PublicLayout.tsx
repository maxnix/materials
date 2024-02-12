import { useNavigate } from "react-router-dom"
import { useCallback } from "react"
import { Button } from "@/components/ui/button/button"
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks"
import { logout } from "../../service/redux/slice/auth"
import { Toaster } from "@/components/ui/toast"

export const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <nav className="fixed top-0 right-0">
      <MenuActions />
    </nav>
    <main>{children}</main>
    <Toaster />
  </>
)

const PublicMenuActions = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row justify-between items-center gap-4 w-full h-16 px-8 bg-white">
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
  const handleClick = useCallback(() => {
    dispatch(logout())
  }, [dispatch])
  return (
    <div className="flex flex-row justify-between items-center gap-4 w-full h-16 px-8 bg-white">
      <Button className="w-fit" variant="ghost" onClick={handleClick}>
        Logout
      </Button>
    </div>
  )
}

const MenuActions = () => {
  const { token } = useAppSelector((state) => state.auth)
  if (token) return <AuthMenuActions />
  return <PublicMenuActions />
}
