import { useRoutes } from "react-router-dom"
import { routes } from "./routes"
import { useAppSelector } from "./service/redux/hooks"

function App() {
  const { token } = useAppSelector((state) => state.auth)
  const isLoggedIn = !!token
  const router = useRoutes(routes(isLoggedIn))

  return router
}

export default App
