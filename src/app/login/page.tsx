"use client";

import { useURL } from "@/components/URLContext";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export default function Login() {
  const supabase = createClient();
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
