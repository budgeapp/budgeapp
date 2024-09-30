import { createClient } from "@/utils/supabase/server";

export const AccountsList = async () => {
  const supabase = createClient();
  const accounts = await supabase.from("accounts").select("id, name");

  return (
    <ul>
      {accounts.data?.map((account) => (
        <li key={account.id}>{account.name}</li>
      ))}
    </ul>
  );
};
