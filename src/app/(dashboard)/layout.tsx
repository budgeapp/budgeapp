"use client";

import { LogoutButton } from "@/components/auth/LogoutButton";
import { useUser } from "@/components/auth/UserContext";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const user = useUser();

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
        <span>{user.id}</span>
        <LogoutButton />
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
