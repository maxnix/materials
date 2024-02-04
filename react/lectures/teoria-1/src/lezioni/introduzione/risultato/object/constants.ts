export const availableColors = [
  `red`,
  `green`,
  `blue`,
  `yellow`,
  `purple`,
] as const

export type Color = (typeof availableColors)[number]

export const arrayOfObjects = availableColors
  .map((c, index) => ({
    id: index,
    title: `Title ${index + 1}`,
    subtitle: `Subtitle ${index + 1}`,
    color: c as Color,
  }))
  .reverse()

export const complexArray = [
  {
    title: `Title 1`,
    subtitle: `Subtitle 1`,
    color: `red` as Color,
  },
  {
    title: `Title 2`,
    subtitle: `Subtitle 2`,
    color: `green` as Color,
  },
  {
    title: `Title 3`,
    subtitle: `Subtitle 3`,
    color: `blue` as Color,
  },
  {
    title: `Title 4`,
    subtitle: `Subtitle 4`,
    color: `yellow` as Color,
  },
  {
    title: `Title 5`,
    subtitle: `Subtitle 5`,
    color: `purple` as Color,
  },
]
