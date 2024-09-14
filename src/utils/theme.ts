import {
  createTheme,
  DefaultMantineColor,
  MantineColorShade,
} from "@mantine/core";

const primaryColor: DefaultMantineColor = "cyan";
const primaryShade: MantineColorShade = 7;

export const theme = createTheme({
  primaryColor,
  primaryShade,
});
