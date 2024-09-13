"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export const LogoutButton = () => {
  const supabase = createClient();

  const handleLogout = async () => await supabase.auth.signOut();

  return <Button onClick={handleLogout}>Logout</Button>;
};
