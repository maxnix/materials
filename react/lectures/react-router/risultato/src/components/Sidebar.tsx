import { NavLink } from "react-router-dom"
import { contactsArray } from "../constants/contacts"

export const Sidebar = () => (
  <div
    id="sidebar"
    className="h-screen min-w-[368px] max-w-[400px] w-full bg-neutral-950"
  >
    <div className="container py-8">
      <h6>My Contacts</h6>
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
                <li className={`nav-item ${isActive ? `nav-item-active` : ``}`}>
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
