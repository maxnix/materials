import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useCallback, useMemo } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const ProfileSheet = () => {
  const location = useLocation()
  const isTransaction = location.pathname === `/profile/transazioni`
  const isInfo = location.pathname === `/profile/info`
  const navigate = useNavigate()
  const handleTabsChange = useCallback(
    (value: string) => {
      navigate(`/app/profile/${value}`)
    },
    [navigate]
  )

  const defaultValue = useMemo(() => {
    if (isTransaction) return `transactions`
    if (isInfo) return `info`
    return `transactions`
  }, [isInfo, isTransaction])
  return (
    <Sheet
      key="1"
      defaultOpen
      onOpenChange={(open) => {
        if (open === false) {
          navigate(`/app/dashboard`)
        }
      }}
    >
      <SheetContent className="overflow-y-auto" side="left">
        <div className="flex justify-center space-x-4 p-4">
          <Tabs
            className="w-full"
            defaultValue={defaultValue}
            onValueChange={handleTabsChange}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="transactions">Transazioni</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>
            <div className="mt-8">
              <Outlet />
            </div>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}
