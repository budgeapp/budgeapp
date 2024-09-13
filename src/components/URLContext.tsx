"use client";

import { createContext, useContext } from "react";

export const URLContext = createContext<string | null>(null);

export const URLProvider = ({
  children,
  value,
}: Readonly<{ children: React.ReactNode; value: string }>) => (
  <URLContext.Provider value={value}>{children}</URLContext.Provider>
);

export const useURL = () => useContext(URLContext);
