export interface Bootcamp {
  Description: unknown[]
  Iscrizioni: number
  Starts: string
  Title: string
  createdAt: string
  ends: string
  id: number
  isRemote: boolean
  publishedAt: string
  seats: number | null
  updatedAt: string
}

export interface Course {
  Description: string
  Lessons: number
  Title: string
  createdAt: string
  id: number
  level: "beginner" | "intermediate" | "advanced"
  publishedAt: string
  updatedAt: string
  weeks: string
}

export interface GetProfileResponse {
  blocked: boolean
  confirmed: boolean
  createdAt: string
  email: string
  id: number
  provider: string
  updatedAt: string
  username: string
  bootcamps: Bootcamp[]
  courses: Course[]
}

export type GetUserChargesParams = {
  email: string
}

export type GetChargesResponse = Charge[]

export type Charge = {
  id: string
  amount: number
  billing_details: {
    email: string
  }
  payment_method_details: {
    card: {
      last4: string
    }
  }
  created: number
  status: "failed" | "succeeded"
}

export type UpdatePasswordRequest = {
  currentPassword: string
  password: string
  passwordConfirmation: string
}
