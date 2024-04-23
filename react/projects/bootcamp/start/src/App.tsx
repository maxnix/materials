import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"
import { AppLoading } from "./feature/home/components/AppLoading"

const App = () => {
  const router = createBrowserRouter(routes())

  return <RouterProvider router={router} fallbackElement={<AppLoading />} />
}

export default App
