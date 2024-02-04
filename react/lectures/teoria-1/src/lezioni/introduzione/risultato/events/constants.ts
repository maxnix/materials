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
    price: Math.random() * 100,
  }))
  .reverse()
