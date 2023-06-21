import * as React from "react";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
