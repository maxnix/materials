export const dataPlaceholder = [
  {
    userId: 1,
    id: 1,
    title: `delectus aut autem`,
    body: `lorem ipsum dolor sit amet`,
  },
  {
    userId: 1,
    id: 2,
    title: `quis ut nam facilis et officia qui`,
    body: `lorem ipsum dolor sit amet`,
  },
  {
    userId: 1,
    id: 3,
    title: `fugiat veniam minus`,
    body: `lorem ipsum dolor sit amet`,
  },
  {
    userId: 1,
    id: 4,
    title: `et porro tempora`,
    body: `lorem ipsum dolor sit amet`,
  },
  {
    userId: 1,
    id: 5,
    title: `laboriosam mollitia et enim quasi adipisci quia provident illum`,
    body: `lorem ipsum dolor sit amet`,
  },
]

export const jsonplacholderUrl = `https://jsonplaceholder.typicode.com`

export type Data = (typeof dataPlaceholder)[number]
