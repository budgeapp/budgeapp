import { Database } from "@/types/supabase";
import { Account } from "./Account";

export type AccountRow = Pick<
  Database["public"]["Tables"]["accounts"]["Row"],
  "id" | "name"
>;

export const AccountsList = ({ accounts }: { accounts: AccountRow[] }) => {
  return (
    <ul>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </ul>
  );
};
