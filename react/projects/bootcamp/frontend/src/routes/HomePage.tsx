import { TopHero } from "../feature/home/components/TopHero";
import { BottomHero } from "../feature/home/components/BottomHero";
import { PublicLayout } from "@/feature/layout/PublicLayout";
import { Outlet } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <PublicLayout>
        <TopHero />
        <BottomHero />
      </PublicLayout>
      <aside>
        <Outlet />
      </aside>
    </>
  );
};
