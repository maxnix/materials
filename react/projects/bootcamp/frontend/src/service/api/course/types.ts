type CourseAttributes = {
  Description: string
  Lessons: number
  Title: string
  bootcamps: { data: any[] } // Qui potresti definire una tipizzazione più specifica per data se disponibile
  createdAt: string
  level: string
  publishedAt: string
  updatedAt: string
  weeks: string
}

export type Course = {
  id: number
  attributes: CourseAttributes
}

export type GetCourseResponse = {
  data: Course[]
}
