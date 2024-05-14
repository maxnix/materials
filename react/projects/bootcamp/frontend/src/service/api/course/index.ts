import { createApi } from "@reduxjs/toolkit/query/react"
import { strapiBaseFetchQuery } from "../utils"
import { Course, GetCourseResponse } from "./types"

export const courseApi = createApi({
  reducerPath: `course`,
  baseQuery: strapiBaseFetchQuery,
  tagTypes: [`Course`],
  endpoints: (build) => ({
    getCourseList: build.query<GetCourseResponse, void>({
      query: () => `/courses`,
      providesTags: [`Course`],
    }),
    getLast3Courses: build.query<GetCourseResponse, void>({
      query: () =>
        `/courses?populate=*&pagination[limit]=3&sort[0]=createdAt:desc`,
      providesTags: [`Course`],
    }),
    getCourse: build.query<Course, string>({
      query: (id) => `courses/${id}`,
      providesTags: [`Course`],
    }),
  }),
})

export const {
  useGetCourseListQuery,
  useGetCourseQuery,
  useGetLast3CoursesQuery,
} = courseApi
