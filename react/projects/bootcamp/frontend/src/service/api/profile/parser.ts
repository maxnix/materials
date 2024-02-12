/* eslint-disable @typescript-eslint/no-unused-vars */
import { Bootcamp, Course, GetProfileResponse } from "./types"

type SimplifiedCourse = Omit<
  Course,
  "publishedAt" | "createdAt" | "updatedAt" | "weeks" | "Description"
>

export const simplifyCourse = (course: Course): SimplifiedCourse => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { publishedAt, createdAt, updatedAt, weeks, Description, ...rest } =
    course
  return rest
}

type SimplifiedBootcamp = Omit<
  Bootcamp,
  | "publishedAt"
  | "Iscrizioni"
  | "createdAt"
  | "updatedAt"
  | "seats"
  | "Description"
>

export const simplifyBootcamp = (bootcamp: Bootcamp): SimplifiedBootcamp => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const simplifyProfile = (profile: GetProfileResponse) => ({
  ...profile,
  courses: profile.courses?.map(simplifyCourse) || null,
  bootcamps: profile.bootcamps?.map(simplifyBootcamp) || null,
})

export type SimplifiedProfile = ReturnType<typeof simplifyProfile>
