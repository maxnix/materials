import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiAuthFetchQuery } from "../utils/strapiAuthFetchQuery"
import { Bootcamp, GetBootcampResponse } from "./types"

export const bootcampApi = createApi({
  reducerPath: `bootcamp`,
  baseQuery: strapiAuthFetchQuery,
  tagTypes: [`Bootcamp`],
  endpoints: (build) => ({
    getBootcampList: build.query<GetBootcampResponse, void>({
      query: () => `/bootcamps`,
      providesTags: [`Bootcamp`],
    }),
    getLast3Bootcamps: build.query<GetBootcampResponse, void>({
      query: () =>
        `/bootcamps?pagination[limit]=3&sort[0]=createdAt:desc&populate=*`,
      providesTags: [`Bootcamp`],
    }),
    getBootcamp: build.query<Bootcamp, string>({
      query: (id) => `bootcamps/${id}`,
      providesTags: [`Bootcamp`],
    }),
  }),
})

export const {
  useGetBootcampListQuery,
  useGetBootcampQuery,
  useGetLast3BootcampsQuery,
} = bootcampApi
