import { AppShell } from "@/components/AppShell";
import { UserProvider } from "@/components/auth/UserContext";
import { createClient } from "@/utils/supabase/server";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = createClient();
  const user = supabase.auth.getUser().then((res) => res.data.user!);

  return (
    <UserProvider userPromise={user}>
      <AppShell>{children}</AppShell>
    </UserProvider>
  );
}
