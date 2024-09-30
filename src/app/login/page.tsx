"use client";

import { useURL } from "@/components/contexts/URLContext";
import { createBrowserClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export default function Login() {
  const supabase = createBrowserClient();
  const url = useURL();

  const handleSignIn = async () =>
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${url}/login/callback`,
      },
    });

  return <Button onClick={handleSignIn}>Log in</Button>;
}
