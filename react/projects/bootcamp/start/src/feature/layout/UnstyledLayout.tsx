import React from "react"
import { Toaster } from "@/components/ui/toast"

export const UnstyledLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <main>{children}</main>
    <Toaster />
  </>
)
