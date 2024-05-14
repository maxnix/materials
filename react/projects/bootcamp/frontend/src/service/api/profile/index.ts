import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiBaseFetchQuery } from "../utils"
import {
  GetChargesResponse,
  GetProfileResponse,
  GetUserChargesParams,
  UpdatePasswordRequest,
} from "./types"
import { simplifyCourseParser, SimplifiedProfile } from "./parser"
import { ResetPasswordResponse } from "../auth/types"

export const profileApi = createApi({
  reducerPath: `profileApi`,
  baseQuery: strapiBaseFetchQuery,
  tagTypes: [`Profile`],
  endpoints: (builder) => ({
    getProfile: builder.query<SimplifiedProfile, void>({
      query: () => `/users/me?populate=*`,
      transformResponse: (response: GetProfileResponse) =>
        simplifyCourseParser(response),
      providesTags: [`Profile`],
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
  useLazyGetProfileQuery,
  useGetUserPaymentsQuery,
  useUpdatePasswordMutation,
} = profileApi
