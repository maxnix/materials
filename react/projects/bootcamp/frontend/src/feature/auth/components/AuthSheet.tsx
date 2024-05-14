import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useCallback } from "react"
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export const AuthSheet = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isLogin = location.pathname === `/auth/login`
  const defaultTab = isLogin ? `login` : `register`

  const handleTabsChange = useCallback(
    (value: string) => {
      navigate(`/auth/${value}`)
    },
    [navigate]
  )
  return (
    <Sheet
      key="1"
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          navigate(`/`)
        }
      }}
    >
      <SheetContent className="overflow-y-auto" side="left">
        <Tabs
          defaultValue={defaultTab}
          className="w-full mt-8"
          onValueChange={handleTabsChange}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <Outlet />
          </div>
        </Tabs>
      </SheetContent>
    </Sheet>
  )
}
