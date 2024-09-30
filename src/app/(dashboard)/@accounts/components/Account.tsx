import { type AccountRow } from "./AccountsList";

interface AccountProperties {
  /** Account details */
  account: AccountRow;
}

export const Account = ({ account }: AccountProperties) => (
  <li>{account.name}</li>
);
