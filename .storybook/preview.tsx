import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;

export const decorators = [
  (renderStory) => <MantineProvider>{renderStory()}</MantineProvider>,
];
