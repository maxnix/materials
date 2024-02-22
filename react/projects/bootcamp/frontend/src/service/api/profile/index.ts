import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiAuthFetchQuery } from "../utils/strapiAuthFetchQuery"
import {
  GetChargesResponse,
  GetProfileResponse,
  GetUserChargesParams,
  UpdatePasswordRequest,
} from "./types"
import { SimplifiedProfile, simplifyProfile } from "./parser"
import { ResetPasswordResponse } from "../auth/types"

const baseQuery = strapiAuthFetchQuery

export const profileApi = createApi({
  reducerPath: `profileApi`,
  baseQuery,
  tagTypes: [`Profile`],
  endpoints: (builder) => ({
    getProfile: builder.query<SimplifiedProfile, void>({
      query: () => `/users/me?populate=*`,
      providesTags: [`Profile`],
      transformResponse: (response: GetProfileResponse) =>
        simplifyProfile(response),
    }),
    getUserPayments: builder.query<GetChargesResponse, GetUserChargesParams>({
      query: ({ email }) =>
        `/stripe/getcharges?email=${encodeURIComponent(email)}`,
    }),
    updatePassword: builder.mutation<
      ResetPasswordResponse,
      UpdatePasswordRequest
    >({
      query: (credentials) => ({
        url: `/auth/change-password`,
        method: `POST`,
        body: credentials,
      }),
    }),
  }),
})

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useGetUserPaymentsQuery,
  useUpdatePasswordMutation,
} = profileApi
