import { useLoaderData } from "react-router-dom"

export const SingleCoursePage = () => {
  const data = useLoaderData()
  console.log(data)

  return <div>Single Course</div>
}
