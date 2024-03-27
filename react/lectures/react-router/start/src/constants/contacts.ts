export const contact = {
  id: 1,
  first: `Your`,
  last: `Name`,
  avatar: `https://picsum.photos/200`,
  twitter: `your_handle`,
  notes: `Some notes`,
  favorite: true,
}

export type Contact = typeof contact

export const contactsArray = [
  contact,
  {
    id: 2,
    first: `Your`,
    last: `Friend`,
    avatar: `https://picsum.photos/200`,
    twitter: `your_friend`,
    notes: `Some notes`,
    favorite: false,
  },
  {
    id: 3,
    first: `Another`,
    last: `Friend`,
    avatar: `https://picsum.photos/200`,
    twitter: `another_friend`,
    notes: `Some notes`,
    favorite: true,
  },
]
