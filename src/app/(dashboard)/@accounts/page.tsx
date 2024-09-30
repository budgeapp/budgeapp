import { createServerClient } from "@/utils/supabase/server";
import { AccountsList } from "./components/AccountsList";

export default async function Accounts() {
  const supabase = createServerClient();
  const accounts = await supabase.from("accounts").select("id, name");

  return <AccountsList accounts={accounts.data || []} />;
}
