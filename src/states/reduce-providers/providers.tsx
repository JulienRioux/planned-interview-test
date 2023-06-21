import { StyledThemeProvider } from "../theme-provider";
import { UserProvider } from "../users";

export const getProviders = () => {
  return [StyledThemeProvider, UserProvider];
};
