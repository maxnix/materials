import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { useAppSelector } from "./service/redux/hooks"

const App = () => {
  const { token } = useAppSelector((state) => state.auth)
  const isLoggedIn = !!token
  const router = createBrowserRouter(routes(isLoggedIn))

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  )
}

export default App
