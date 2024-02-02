import { Toaster } from "@/components/ui/toast";
import React from "react";

export const UnstyledLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <main>{children}</main>
      <Toaster />
    </>
  );
};
