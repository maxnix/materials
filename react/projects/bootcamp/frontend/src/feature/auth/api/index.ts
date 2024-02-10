import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  AdminLoginCredentials,
  Credentials,
  ForgotPasswordRequest,
  LoginCredentials,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SignupResponse,
} from "./types"
import { RootState } from "@/service/redux/store"

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:1337/api`,
  headers: {
    "Content-Type": `application/json`,
  },
  credentials: `include`,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth
    if (token) {
      headers.set(`Authorization`, `Bearer ${token}`)
    }
    return headers
  },
})

const publicRegistrationUrl = `/auth/local`
const adminRegistrationUrl = `/admin/auth/local`
const publicBaseUrl = `/auth`

export const authApi = createApi({
  reducerPath: `authApi`,
  baseQuery,
  tagTypes: [`Auth`],
  endpoints: (builder) => ({
    login: builder.mutation<SignupResponse, LoginCredentials>({
      query: (credentials) => ({
        url: `${publicRegistrationUrl}`,
        method: `POST`,
        body: credentials,
      }),
      invalidatesTags: [`Auth`],
    }),
    adminLogin: builder.mutation<SignupResponse, AdminLoginCredentials>({
      query: (credentials) => ({
        url: `${adminRegistrationUrl}/login`,
        method: `POST`,
        body: credentials,
      }),
      invalidatesTags: [`Auth`],
    }),
    register: builder.mutation<SignupResponse, Credentials>({
      query: (credentials) => ({
        url: `${publicRegistrationUrl}/register`,
        method: `POST`,
        body: credentials,
      }),
      invalidatesTags: [`Auth`],
    }),
    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (body) => ({
        url: `${publicBaseUrl}/forgot-password`,
        method: `POST`,
        body,
      }),
    }),
    resendEmailVerification: builder.mutation<void, ForgotPasswordRequest>({
      query: (body) => ({
        url: `${publicBaseUrl}/send-email-confirmation`,
        method: `POST`,
        body,
      }),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: (body) => ({
        url: `${publicBaseUrl}/reset-password`,
        method: `POST`,
        body,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useAdminLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendEmailVerificationMutation,
} = authApi
