export const Sidebar = () => (
  <div
    id="sidebar"
    className="h-screen min-w-[368px] max-w-[400px] w-full bg-neutral-950"
  >
    <div className="container py-8">
      <h6>My Contacts</h6>
      <nav className="mt-4">
        <ul className="space-y-4">
          <li className="nav-item">
            <a href={`/contacts/1`}>Your Name</a>
          </li>
          <li className="nav-item">
            <a href={`/contacts/2`}>Your Friend</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)
