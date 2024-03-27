export const Sidebar = () => (
  <div
    id="sidebar"
    className="h-screen min-w-[368px] max-w-[400px] w-full bg-neutral-950"
  >
    <div className="container py-8">
      <h6>My Contacts</h6>
      <nav className="mt-4">
        <ul className="flex flex-col gap-4">
          <a href={`/contacts/1`}>
            <li className="nav-item">Your Name</li>
          </a>
          <a href={`/contacts/2`}>
            <li className="nav-item">Your Friend</li>
          </a>
        </ul>
      </nav>
    </div>
  </div>
)
