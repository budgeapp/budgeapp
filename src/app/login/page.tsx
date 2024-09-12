"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export default function Login() {
  const supabase = createClient();

  const handleSignIn = async () =>
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/login/callback",
      },
    });

  return <Button onClick={handleSignIn}>Log in</Button>;
}
