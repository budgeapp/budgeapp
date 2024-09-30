"use client";

import { createBrowserClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createContext, use, useContext } from "react";

export const UserContext = createContext<Promise<User> | null>(null);

export const UserProvider = ({
  children,
  userPromise,
}: Readonly<{
  children: React.ReactNode;
  userPromise: Promise<User>;
}>) => {
  const supabase = createBrowserClient();
  const router = useRouter();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      router.push("/login");
    }
  });

  return (
    <UserContext.Provider value={userPromise}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return use(context!);
};
