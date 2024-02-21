import { SingleImageType } from "../types/shared"

type BootcampAttributes = {
  Description: unknown[]
  Iscrizioni: number
  Starts: string
  Title: string
  createdAt: string
  ends: string
  isRemote: boolean
  publishedAt: string
  seats: null | number
  updatedAt: string
  info: string
  Cover: { data: SingleImageType }
}

export type Bootcamp = {
  id: number
  attributes: BootcampAttributes
}

export type GetBootcampResponse = {
  data: Bootcamp[]
}
