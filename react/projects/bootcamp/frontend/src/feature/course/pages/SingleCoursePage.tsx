import { useLoaderData } from "react-router-dom"
import { CourseAssignment } from "../components/CourseAssignment"

export const SingleCoursePage = () => {
  const data = useLoaderData()
  console.log(data)

  return <CourseAssignment />
}
