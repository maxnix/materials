import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App.tsx"
import "./index.css"
import { store } from "./service/redux/store.ts"
import { authInit } from "./service/redux/slice/auth/index.ts"

store.dispatch(authInit())

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
