import { AccountRow } from "./AccountsList";

export const Account = ({ account }: { account: AccountRow }) => (
  <li>{account.name}</li>
);
