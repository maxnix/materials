import { Button } from "@/components/ui/button/button"
import { Toaster } from "@/components/ui/toast"

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

const PublicMenuActions = () => (
  <div className="flex flex-row justify-end items-center gap-4 w-full h-16 px-8">
    <Button className="w-fit" variant="ghost">
      Accedi
    </Button>
    <Button className="w-fit">Registrati</Button>
  </div>
)

// const AuthMenuActions = () => (
//   <div className="flex flex-row justify-between w-full items-center gap-4 h-16 bg-white px-8">
//     <Link to="/app/dashboard">
//       <Button variant="link">Go to Dashboard</Button>
//     </Link>
//     <div className="flex flex-row justify-end items-center gap-4 h-16">
//       <Button
//         variant={`secondary`}
//         className="w-fit"
//         // onClick={() => navigate(`/app/profile/transactions`)}
//       >
//         Profilo
//       </Button>
//       <Button className="w-fit" variant="ghost">
//         Logout
//       </Button>
//     </div>
//   </div>
// )

const MenuActions = () => (
  // if (token) return <AuthMenuActions />
  <PublicMenuActions />
)
