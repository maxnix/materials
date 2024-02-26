import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { useAppSelector } from "./service/redux/hooks"
import { AppLoading } from "./feature/home/components/AppLoading"

const App = () => {
  const { token } = useAppSelector((state) => state.auth)
  const isLoggedIn = !!token
  const router = createBrowserRouter(routes(isLoggedIn))

  return <RouterProvider router={router} fallbackElement={<AppLoading />} />
}

export default App
