import { type Database } from "@/types/supabase";
import { Account } from "./Account";

export type AccountRow = Pick<
  Database["public"]["Tables"]["accounts"]["Row"],
  "id" | "name"
>;

interface AccountsListProperties {
  /** List of accounts */
  accounts: AccountRow[];
}

export const AccountsList = ({ accounts }: AccountsListProperties) => {
  return (
    <ul>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </ul>
  );
};
