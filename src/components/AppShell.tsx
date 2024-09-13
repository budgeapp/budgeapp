"use client";

import { LogoutButton } from "@/components/auth/LogoutButton";
import { useUser } from "@/components/auth/UserContext";
import { AppShell as _AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const AppShell = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [opened, { toggle }] = useDisclosure();
  const user = useUser();

  return (
    <_AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <_AppShell.Header p="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <span>Budge</span>
        <span>{user.id}</span>
        <LogoutButton />
      </_AppShell.Header>

      <>{children}</>
    </_AppShell>
  );
};
