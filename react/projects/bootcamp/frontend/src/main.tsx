import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import { store } from "./service/redux/store.ts"
import { authInit } from "./service/redux/slice/auth/index.ts"

store.dispatch(authInit())

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
