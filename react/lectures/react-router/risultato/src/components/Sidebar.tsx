/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink, useNavigate } from "react-router-dom"
import { contactsArray } from "../constants/contacts"

export const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div
      id="sidebar"
      className="h-screen min-w-[368px] max-w-[400px] w-full bg-neutral-950"
    >
      <div className="container py-8">
        <h6 onClick={() => navigate(`/`)} className="cursor-pointer">
          My Contacts
        </h6>
        <nav className="mt-4">
          <ul className="flex flex-col gap-4">
            {contactsArray.map((contact) => (
              // <Link key={contact.id} to={`/contacts/${contact.id}`}>
              //   <li className="nav-item">
              //     {contact.first} {contact.last}
              //   </li>
              // </Link>
              <NavLink key={contact.id} to={`/contacts/${contact.id}`}>
                {({ isActive }) => (
                  <li
                    className={`nav-item ${isActive ? `nav-item-active` : ``}`}
                  >
                    {contact.first} {contact.last}
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
