import { RouteObject } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Auth } from "./auth/Auth";
import { LoginRoute } from "./auth/Login";
import { RegisterRoute } from "./auth/Register";
import { ForgotRoute } from "./auth/Forgot";
import { ResetRoute } from "./auth/Reset";
import { EmailVericationRoute } from "./auth/VerifyEmail";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "auth/",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <LoginRoute />,
            index: true,
          },
          {
            path: "register",
            element: <RegisterRoute />,
          },
        ],
      },
      {
        path: "auth/forgotpassword",
        element: <ForgotRoute />,
      },
    ],
  },
  {
    path: "auth/resetpassword",
    element: <ResetRoute />,
  },
  {
    path: "auth/verify-email",
    element: <EmailVericationRoute />,
  },
];
