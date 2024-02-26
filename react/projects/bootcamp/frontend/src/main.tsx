import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App.tsx"
import "./index.css"
import { store } from "./service/redux/store.ts"
import { authInit } from "./service/redux/slice/auth/index.ts"
import { AppLoading } from "./feature/home/components/AppLoading.tsx"

store.dispatch(authInit())

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <React.StrictMode>
    <Suspense fallback={<AppLoading />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
)
