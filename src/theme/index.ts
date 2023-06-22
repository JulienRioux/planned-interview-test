import { DefaultTheme } from "styled-components";
import { StyledComponentProps } from "./types";

/** Color tokens. */
export enum ColorToken {
  Black = "#000000",
  Black100 = "#00000011",
  Black200 = "#00000022",
  LightGrey = "#777777",
  Green = "#52a27d",
  White = "#ffffff",
  Transparent = "transparent",
  Red100 = "#fff5f5",
  Red500 = "#fa525244",
}

/** Size tokens. */
export enum SizeToken {
  // PX
  Size1px = "1px",
  Size4px = "4px",
  Size8px = "8px",
  Size12px = "12px",
  Size14px = "14px",
  Size16px = "16px",
  Size20px = "20px",
  Size800px = "800px",

  // REM
  Size2rem = "2rem",
}

/** Setting up a theme object to use a tokenize approach when styling compnents for
 * a better usability and to help with styling consistency over the app.
 * */
export const theme: DefaultTheme = {
  // Alert
  "$alert-bg-color": ColorToken.Red100,
  "$alert-border": `${SizeToken.Size1px} solid ${ColorToken.Red500}`,
  "$alert-padding": SizeToken.Size8px,
  "$alert-border-radius": SizeToken.Size8px,
  "$alert-font-size": SizeToken.Size14px,

  // Button
  "$button-default-bg-color": ColorToken.Green,
  "$button-default-color": ColorToken.White,
  "$button-default-border": `${SizeToken.Size1px} solid ${ColorToken.Green}`,
  "$button-default-padding": `${SizeToken.Size8px} ${SizeToken.Size16px}`,
  "$button-default-border-radius": SizeToken.Size2rem,

  // Card
  "$card-padding": SizeToken.Size20px,
  "$card-bg-color": ColorToken.White,
  "$card-border-radius": SizeToken.Size8px,
  "$card-box-shadow": `0 4px 10px ${ColorToken.Black100}`,
  "$card-border": `${SizeToken.Size1px} solid ${ColorToken.Black100}`,

  // Checkbox
  "$checkbox-border": `${SizeToken.Size1px} solid ${ColorToken.Black200}`,
  "$checkbox-border-radius": SizeToken.Size4px,
  "$checkbox-size": SizeToken.Size14px,
  "$checkbox-accent-color": ColorToken.Black,

  // Input
  "$input-border": `${SizeToken.Size1px} solid ${ColorToken.Black200}`,
  "$input-background": ColorToken.Transparent,
  "$input-padding": `${SizeToken.Size8px} ${SizeToken.Size12px}`,
  "$input-border-radius": SizeToken.Size8px,
  "$input-placeholder-color": ColorToken.LightGrey,
  "$input:focus-border-color": ColorToken.Black,
  "$input-font-size": SizeToken.Size14px,

  // Media queries
  "$media-query-large": SizeToken.Size800px,

  // Table
  "$table-font-size": SizeToken.Size14px,
  "$table-text-align": "left",
  "$table-border": `${SizeToken.Size1px} solid ${ColorToken.Black100}`,
  "$table.thead-font-weight": "bold",
};

/** Use the token() function to easily import design tokens inside styled-components.  */
export const token =
  (key: keyof DefaultTheme) => (props: StyledComponentProps) =>
    props.theme[key];
