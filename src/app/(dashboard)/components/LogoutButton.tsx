"use client";

import { createBrowserClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export const LogoutButton = () => {
  const supabase = createBrowserClient();

  const handleLogout = async () => await supabase.auth.signOut();

  return <Button onClick={handleLogout}>Logout</Button>;
};
