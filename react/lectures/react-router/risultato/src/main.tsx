import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "./routes/root"
import { ErrorPage } from "./routes/error-page"
import { Contact } from "./routes/contact"
import { ContactsRoute } from "./routes/contacts"

// const router = createBrowserRouter([
//   {
//     path: `/`,
//     element: <div>Sono un Router</div>,
//   },
// ])
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/contacts/`,
    element: <ContactsRoute />,
    children: [
      {
        path: `/contacts/:contactId`,
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
