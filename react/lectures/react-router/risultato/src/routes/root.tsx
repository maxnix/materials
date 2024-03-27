import { Sidebar } from "../components/Sidebar"

export const Root = () => (
  <div className="flex h-screen w-full">
    <Sidebar />
    <div id="content" className="container py-8 flex  justify-center mx-auto">
      <h1>React Router Contacts</h1>
    </div>
  </div>
)
