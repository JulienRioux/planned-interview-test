import { DefaultTheme } from "styled-components";

enum ColorToken {
  Black = "#000000",
  Black200 = "#00000022",
  Green = "#52a27d",
  White = "#ffffff",
  Transparent = "transparent",
}

enum SizeToken {
  // PX
  Size1px = "1px",
  Size8px = "8px",
  Size12px = "12px",
  Size16px = "16px",
  Size20px = "20px",
  Size1200px = "1200px",

  // REM
  Size2rem = "2rem",
}

declare module "styled-components" {
  export interface DefaultTheme {
    // Text
    "$text-color": ColorToken;

    // Input
    "$input-border": string;
    "$input-background": ColorToken;
    "$input-border-radius": SizeToken;
    "$input-padding": string;

    // Button
    "$button-default-bg-color": ColorToken;
    "$button-default-color": ColorToken;
    "$button-default-border": string;
    "$button-default-padding": string;
    "$button-default-border-radius": SizeToken;

    // Card
    "$card-padding": SizeToken;

    // Media queries
    "$media-query-large": SizeToken;
  }
}

export const theme: DefaultTheme = {
  // Text
  "$text-color": ColorToken.Black,

  // Input
  "$input-border": `${SizeToken.Size1px} solid ${ColorToken.Black200}`,
  "$input-background": ColorToken.Transparent,
  "$input-padding": `${SizeToken.Size8px} ${SizeToken.Size12px}`,
  "$input-border-radius": SizeToken.Size8px,

  // Button
  "$button-default-bg-color": ColorToken.Green,
  "$button-default-color": ColorToken.White,
  "$button-default-border": `${SizeToken.Size1px} solid ${ColorToken.Green}`,
  "$button-default-padding": `${SizeToken.Size8px} ${SizeToken.Size16px}`,
  "$button-default-border-radius": SizeToken.Size2rem,

  // Card
  "$card-padding": SizeToken.Size20px,

  // Media queries
  "$media-query-large": SizeToken.Size1200px,
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
