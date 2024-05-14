import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { AppLoading } from "./feature/home/components/AppLoading"
import { useAppSelector } from "./service/redux/hooks"

const App = () => {
  const { token } = useAppSelector((state) => state.auth)
  const router = createBrowserRouter(routes(!!token))

  return <RouterProvider router={router} fallbackElement={<AppLoading />} />
}

export default App
