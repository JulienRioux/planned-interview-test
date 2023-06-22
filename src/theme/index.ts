import { DefaultTheme } from "styled-components";

export enum ColorToken {
  Black = "#000000",
  Black100 = "#00000011",
  Black200 = "#00000022",
  LightGrey = "#777777",
  Green = "#52a27d",
  White = "#ffffff",
  Transparent = "transparent",
}

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

declare module "styled-components" {
  export interface DefaultTheme {
    // Button
    "$button-default-bg-color": ColorToken;
    "$button-default-color": ColorToken;
    "$button-default-border": string;
    "$button-default-padding": string;
    "$button-default-border-radius": SizeToken;
    "$input:focus-border-color": ColorToken;

    // Card
    "$card-padding": SizeToken;
    "$card-bg-color": ColorToken;
    "$card-border-radius": SizeToken;
    "$card-box-shadow": string;
    "$card-border": string;

    // Checkbox
    "$checkbox-border": string;
    "$checkbox-border-radius": SizeToken;
    "$checkbox-size": SizeToken;
    "$checkbox-accent-color": ColorToken;

    // Input
    "$input-border": string;
    "$input-background": ColorToken;
    "$input-border-radius": SizeToken;
    "$input-padding": string;
    "$input-placeholder-color": ColorToken;
    "$input-font-size": SizeToken;

    // Media queries
    "$media-query-large": SizeToken;

    // Table
    "$table-font-size": SizeToken;
    "$table-text-align": "auto" | "left" | "right" | "center";
    "$table-border": string;
    "$table.thead-font-weight": string;
  }
}

export const theme: DefaultTheme = {
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

type Path<T extends string> = T extends "" ? "" : `.${T}`;

type PathsOf<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${Path<PathsOf<T[K]>>}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

interface StyledComponentProps {
  theme: DefaultTheme;
}

export const token =
  (key: keyof DefaultTheme) => (props: StyledComponentProps) =>
    props.theme[key];
