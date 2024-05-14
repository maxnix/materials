import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiBaseFetchQuery } from "../utils"
import { Bootcamp, GetBootcampResponse } from "./types"

export const bootcampApi = createApi({
  reducerPath: `bootcampApi`,
  baseQuery: strapiBaseFetchQuery,
  tagTypes: [`Bootcamp`],
  endpoints: (builder) => ({
    getBootcampList: builder.query<GetBootcampResponse, void>({
      query: () => `/bootcamps?populate=*`,
      providesTags: [`Bootcamp`],
    }),
    getLast3Bootcamps: builder.query<GetBootcampResponse, void>({
      query: () =>
        `/bootcamps?pagination[limit]=3&sort[0]=createdAt:desc&populate=*`,
      providesTags: [`Bootcamp`],
    }),
    getBootcamp: builder.query<Bootcamp, string>({
      query: (id) => `/bootcamps/${id}?populate=*`,
      providesTags: [`Bootcamp`],
    }),
    unsubscribeFromBootcamp: builder.mutation<
      void,
      { bootcampId: string; userId: number }
    >({
      query: ({ bootcampId, userId }) => ({
        url: `/bootcamps/unsubscribe`,
        method: `POST`,
        body: { bootcampId, userId },
      }),
      invalidatesTags: [`Bootcamp`],
    }),
  }),
})

export const {
  useGetBootcampListQuery,
  useGetLast3BootcampsQuery,
  useGetBootcampQuery,
  useUnsubscribeFromBootcampMutation,
} = bootcampApi
