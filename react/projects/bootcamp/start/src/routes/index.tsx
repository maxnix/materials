import { RouteObject } from "react-router-dom"
import { HomePage } from "./HomePage"

export const routes = (): RouteObject[] => [
  {
    path: `/`,
    element: <HomePage />,
  },
]

// export const routes = (isLoggedIn: boolean): RouteObject[] => [
//   {
//     path: `/`,
//     element: <HomePage />,
//     children: [
//       {
//         path: `auth/`,
//         element: <Auth />,
//         children: [
//           {
//             path: `login`,
//             element: <LoginRoute />,
//             index: true,
//           },
//           {
//             path: `register`,
//             element: <RegisterRoute />,
//           },
//         ],
//       },
//       {
//         path: `auth/forgotpassword`,
//         element: <ForgotRoute />,
//       },
//     ],
//   },
//   {
//     path: `auth/resetpassword`,
//     element: <ResetRoute />,
//   },
//   {
//     path: `auth/verify-email`,
//     element: <EmailVericationRoute />,
//   },
//   ...dashboardRoutes(isLoggedIn),
// ]
