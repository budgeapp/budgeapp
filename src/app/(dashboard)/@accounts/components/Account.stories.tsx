import type { Meta, StoryObj } from "@storybook/react";
import { Account } from "./Account";

const meta: Meta<typeof Account> = { component: Account };

export default meta;

type Story = StoryObj<typeof Account>;

export const Default: Story = {
  args: {
    account: {
      id: "some_uuid",
      name: "Account Name",
    },
  },
};
