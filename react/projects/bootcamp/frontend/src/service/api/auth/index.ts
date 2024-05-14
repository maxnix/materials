import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiBaseFetchQuery } from "../utils"
import {
  ForgotPasswordRequest,
  LoginCredentials,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SignupCredentials,
  SignupResponse,
} from "./types"

const PUBLIC_AUTH_URL = `auth/local`

export const authApi = createApi({
  reducerPath: `authApi`,
  baseQuery: strapiBaseFetchQuery,
  tagTypes: [`Auth`],
  endpoints: (builder) => ({
    register: builder.mutation<SignupResponse, SignupCredentials>({
      query: (data) => ({
        url: `${PUBLIC_AUTH_URL}/register`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: [`Auth`],
    }),
    login: builder.mutation<SignupResponse, LoginCredentials>({
      query: (data) => ({
        url: `${PUBLIC_AUTH_URL}`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: [`Auth`],
    }),
    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (data) => ({
        url: `auth/forgot-password`,
        method: `POST`,
        body: data,
      }),
    }),
    resendEmailVerification: builder.mutation<void, ForgotPasswordRequest>({
      query: (data) => ({
        url: `auth/send-email-confirmation`,
        method: `POST`,
        body: data,
      }),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: (data) => ({
        url: `auth/reset-password`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResendEmailVerificationMutation,
  useResetPasswordMutation,
} = authApi
