import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiAuthFetchQuery } from "../utils/strapiAuthFetchQuery"
import { Bootcamp, GetBootcampResponse } from "./types"

export const bootcampApi = createApi({
  reducerPath: `bootcamp`,
  baseQuery: strapiAuthFetchQuery,
  tagTypes: [`Bootcamp`],
  endpoints: (build) => ({
    getBootcampList: build.query<GetBootcampResponse, void>({
      query: () => `/bootcamps?populate=*`,
      providesTags: [`Bootcamp`],
    }),
    getLast3Bootcamps: build.query<GetBootcampResponse, void>({
      query: () =>
        `/bootcamps?pagination[limit]=3&sort[0]=createdAt:desc&populate=*`,
      providesTags: [`Bootcamp`],
    }),
    getBootcamp: build.query<Bootcamp, string>({
      query: (id) => `bootcamps/${id}?populate=*`,
      providesTags: [`Bootcamp`],
    }),
    unsubscribeFromBootcamp: build.mutation<
      void,
      { bootcampId: string; userId: number }
    >({
      query: ({ bootcampId, userId }) => ({
        url: `/bootcamps/unsubscribe`,
        method: `POST`,
        body: { userId, bootcampId },
      }),
      invalidatesTags: [`Bootcamp`],
    }),
  }),
})

export const {
  useGetBootcampListQuery,
  useGetBootcampQuery,
  useGetLast3BootcampsQuery,
  useUnsubscribeFromBootcampMutation,
} = bootcampApi
