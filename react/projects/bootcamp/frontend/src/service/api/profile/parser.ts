/* eslint-disable @typescript-eslint/no-unused-vars */
import { Bootcamp, Course, GetProfileResponse } from "./types"

type SimpleCourse = Omit<
  Course,
  "publishedAt" | "createdAt" | "updatedAt" | "weeks" | "Description"
>

const simplifyCourse = (course: Course): SimpleCourse => {
  const { publishedAt, createdAt, updatedAt, weeks, Description, ...rest } =
    course
  return rest
}

type SimpleBootcamp = Omit<
  Bootcamp,
  | "publishedAt"
  | "Iscrizioni"
  | "createdAt"
  | "updatedAt"
  | "seats"
  | "Description"
>

const simplifyBootcamp = (bootcamp: Bootcamp): SimpleBootcamp => {
  const {
    publishedAt,
    Iscrizioni,
    createdAt,
    updatedAt,
    seats,
    Description,
    ...rest
  } = bootcamp
  return rest
}

export const simplifyCourseParser = (profile: GetProfileResponse) => ({
  ...profile,
  bootcamps: profile?.bootcamps?.map(simplifyBootcamp) ?? [],
  courses: profile?.courses?.map(simplifyCourse) ?? [],
})

export type SimplifiedProfile = ReturnType<typeof simplifyCourseParser>
