import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiAuthFetchQuery } from "../utils/strapiAuthFetchQuery"
import { GetProfileResponse } from "./types"
import { SimplifiedProfile, simplifyProfile } from "./parser"

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
  }),
})

export const { useGetProfileQuery } = profileApi
