import { Form } from "react-router-dom"
import { Contact as ContactType, contact } from "../constants/contacts"

export const Contact = () => (
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

      <div className="flex items-center gap-4">
        <Form action="edit">
          <button className="btn-primary" type="submit">
            Edit
          </button>
        </Form>
        <Form
          method="post"
          action="destroy"
          className="btn-disruptive"
          onSubmit={(event) => {
            // eslint-disable-next-line no-restricted-globals
            if (!confirm(`Please confirm you want to delete this record.`)) {
              event.preventDefault()
            }
          }}
        >
          <button type="submit">Delete</button>
        </Form>
      </div>
    </div>
  </div>
)

const Favorite = ({ singleContact }: { singleContact: ContactType }) => {
  // yes, this is a `let` for later
  const { favorite } = singleContact
  return (
    <Form method="post">
      <button
        type="submit"
        name="favorite"
        className="p-1"
        value={favorite ? `false` : `true`}
        aria-label={favorite ? `Remove from favorites` : `Add to favorites`}
      >
        {favorite ? `★` : `☆`}
      </button>
    </Form>
  )
}
