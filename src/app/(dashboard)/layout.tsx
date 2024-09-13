"use client";

import { LogoutButton } from "@/components/auth/LogoutButton";
import { createClient } from "@/utils/supabase/client";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = createClient();
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      router.push("/login");
    }
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <span>Budge</span>
        <LogoutButton />
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
