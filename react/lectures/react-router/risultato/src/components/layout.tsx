import React from "react"
import { Sidebar } from "./Sidebar"

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen w-full">
    <Sidebar />
    <div id="content" className="container py-8 flex  justify-center mx-auto">
      {children}
    </div>
  </div>
)
