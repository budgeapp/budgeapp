import { type Database } from "@/types/supabase";
import { Account } from "./Account";
import { AddAccountButton } from "./AddAccountButton";

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
    <section>
      <header>
        <h1>Accounts</h1>
        <AddAccountButton />
      </header>
      <ul>
        {accounts.map((account) => (
          <Account key={account.id} account={account} />
        ))}
      </ul>
    </section>
  );
};
