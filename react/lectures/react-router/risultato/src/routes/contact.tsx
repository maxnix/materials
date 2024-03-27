import { useParams } from "react-router-dom"
import { useMemo, useState } from "react"
import {
  Contact as ContactType,
  contact as defaultContact,
  contactsArray,
} from "../constants/contacts"

export const Contact = () => {
  const { contactId } = useParams()
  const contact = useMemo(
    () =>
      contactsArray.find((c) => c.id === Number(contactId)) || defaultContact,
    [contactId]
  )
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-md overflow-hidden">
        <img alt="i" key={contact.avatar} src={contact.avatar} />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="flex items-center text-2xl">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          {` `}
          <Favorite singleContact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
              rel="noreferrer"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}
      </div>
    </div>
  )
}

const Favorite = ({ singleContact }: { singleContact: ContactType }) => {
  // yes, this is a `let` for later
  const [favorite, setFavorite] = useState(singleContact.favorite)

  const changeFavorite = () => {
    setFavorite(!favorite)
  }
  return (
    <div>
      <button
        type="submit"
        name="favorite"
        className="p-1"
        value={favorite ? `false` : `true`}
        aria-label={favorite ? `Remove from favorites` : `Add to favorites`}
        onClick={changeFavorite}
      >
        {favorite ? `★` : `☆`}
      </button>
    </div>
  )
}
