export type CourseLevel = `Beginner` | `Intermediate` | `Advanced`

export const courseTablePlaceholder = [
  {
    id: 1,
    name: `Introduction to Programming`,
    level: `Beginner` as CourseLevel,
    lessons: 10,
    completed: 0,
  },
  {
    id: 2,
    name: `Intermediate Programming`,
    level: `Intermediate` as CourseLevel,
    lessons: 10,
    completed: 0,
  },
  {
    id: 3,
    name: `Advanced Programming`,
    level: `Advanced` as CourseLevel,
    lessons: 10,
    completed: 0,
  },
  {
    id: 4,
    name: `Introduction to Programming`,
    level: `Beginner` as CourseLevel,
    lessons: 10,
    completed: 0,
  },
  // {
  //   id: 5,
  //   name: `Intermediate Programming`,
  //   level: `Intermediate` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 6,
  //   name: `Advanced Programming`,
  //   level: `Advanced` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 7,
  //   name: `Introduction to Programming`,
  //   level: `Beginner` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 8,
  //   name: `Intermediate Programming`,
  //   level: `Intermediate` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 9,
  //   name: `Advanced Programming`,
  //   level: `Advanced` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 10,
  //   name: `Introduction to Programming`,
  //   level: `Beginner` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 11,
  //   name: `Intermediate Programming`,
  //   level: `Intermediate` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
  // {
  //   id: 12,
  //   name: `Advanced Programming`,
  //   level: `Advanced` as CourseLevel,
  //   lessons: 10,
  //   completed: 0,
  // },
]

export const bootcampTablePlaceholder = [
  {
    id: 1,
    name: `Bootcamp per grandi`,
    location: `Milano`,
    startDate: `2022-01-01`,
  },
  {
    id: 2,
    name: `Bootcamp per piccoli`,
    location: `Roma`,
    startDate: `2022-01-01`,
  },
  {
    id: 3,
    name: `Bootcamp per tutti`,
    location: `Napoli`,
    startDate: `2022-01-01`,
  },
  {
    id: 4,
    name: `Bootcamp per grandi`,
    location: `Milano`,
    startDate: `2022-01-01`,
  },
]

type CourseTablePlaceholder = typeof courseTablePlaceholder
export type CourseTablePlaceholderItem = CourseTablePlaceholder[number]

type BootcampTablePlaceholder = typeof bootcampTablePlaceholder
export type BootcampTablePlaceholderItem = BootcampTablePlaceholder[number]
