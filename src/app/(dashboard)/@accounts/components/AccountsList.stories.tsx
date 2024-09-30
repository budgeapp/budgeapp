import type { Meta, StoryObj } from "@storybook/react";
import { AccountsList } from "./AccountsList";

const meta: Meta<typeof AccountsList> = { component: AccountsList };

export default meta;

type Story = StoryObj<typeof AccountsList>;

export const Default: Story = {
  args: {
    accounts: [
      {
        id: "some_uuid",
        name: "Account 1",
      },
      {
        id: "some_other_uuid",
        name: "Account 2",
      },
      {
        id: "yet_another_uuid",
        name: "Account 3",
      },
    ],
  },
};
