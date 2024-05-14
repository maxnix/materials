import { useParams } from "react-router-dom"
import {
  MissingBootcampPage,
  SingleBootcampPage,
} from "@/feature/bootcamp/pages/SingleBottcampPage"

export const BootcampRoute = () => {
  const { id } = useParams<{ id: string }>()
  if (!id) return <MissingBootcampPage />
  return <SingleBootcampPage />
}
