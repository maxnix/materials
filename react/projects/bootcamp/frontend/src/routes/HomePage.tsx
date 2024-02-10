import { Outlet } from "react-router-dom"
import { TopHero } from "../feature/home/components/TopHero"
import { BottomHero } from "../feature/home/components/BottomHero"
import { PublicLayout } from "@/feature/layout/PublicLayout"

export const HomePage = () => (
  <>
    <PublicLayout>
      <TopHero />
      <BottomHero />
    </PublicLayout>
    <aside>
      <Outlet />
    </aside>
  </>
)
