import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiAuthFetchQuery } from "../utils/strapiAuthFetchQuery"
import { GetProfileResponse } from "./types"

const baseQuery = strapiAuthFetchQuery

export const profileApi = createApi({
  reducerPath: `profileApi`,
  baseQuery,
  tagTypes: [`Profile`],
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileResponse, void>({
      query: () => `/users/me`,
      providesTags: [`Profile`],
    }),
  }),
})

export const { useGetProfileQuery } = profileApi
