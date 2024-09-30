import { AppShell } from "@/app/(dashboard)/components/AppShell";
import { UserProvider } from "@/components/contexts/UserContext";
import { createServerClient } from "@/utils/supabase/server";
import { AppShellMain, AppShellNavbar } from "@mantine/core";

export default function DashboardLayout({
  accounts,
  children,
}: Readonly<{ accounts: React.ReactNode; children: React.ReactNode }>) {
  const supabase = createServerClient();
  const user = supabase.auth.getUser().then((res) => res.data.user!);

  return (
    <UserProvider userPromise={user}>
      <AppShell>
        <AppShellNavbar p="md">{accounts}</AppShellNavbar>
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </UserProvider>
  );
}
