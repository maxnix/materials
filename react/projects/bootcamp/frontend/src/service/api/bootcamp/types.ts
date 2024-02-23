import { SingleImageType } from "../types/shared"

type BootcampAttributes = {
  Description: Block[]
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
  Lessons: BootcampLesson[]
  Product: BootcampStripeProduct
}

export type BootcampStripeProduct = {
  id: number
  payment_link: string
  product_id: string
}

export type BootcampLesson = {
  id: number
  Title: string
  Description: string
}

export type HeadingBlock = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  type: "heading"
  children: [{ type: "text"; text: string }]
}

export type ParagraphBlock = {
  type: "paragraph"
  children: [{ type: "text"; text: string }]
}

export type ListBlock = {
  type: "list"
  format: "unordered"
  children: {
    type: "list"
    children: [{ type: "text"; text: string }]
  }[]
}

export type Block = HeadingBlock | ParagraphBlock | ListBlock

export type Bootcamp = {
  id: number
  attributes: BootcampAttributes
}

export type GetBootcampResponse = {
  data: Bootcamp[]
}
