import { DefaultTheme } from "styled-components";

enum ColorToken {
  Black = "#000000",
  Black200 = "#00000022",
  Green = "#52a27d",
  White = "#ffffff",
  Transparent = "transparent",
}

enum SizeToken {
  Size1 = "1px",
  Size8 = "8px",
  Size12 = "8px",
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
  }
}

export const theme: DefaultTheme = {
  // Text
  "$text-color": ColorToken.Black,

  // Input
  "$input-border": `${SizeToken.Size1} solid ${ColorToken.Black200}`,
  "$input-background": ColorToken.Transparent,
  "$input-padding": `${SizeToken.Size8} ${SizeToken.Size12}`,
  "$input-border-radius": SizeToken.Size8,

  // Button
  "$button-default-bg-color": ColorToken.Green,
  "$button-default-color": ColorToken.White,
  "$button-default-border": `${SizeToken.Size1} solid ${ColorToken.Green}`,
  "$button-default-padding": `${SizeToken.Size8} ${SizeToken.Size8}`,
  "$button-default-border-radius": SizeToken.Size8,
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
