import { DefaultTheme } from "styled-components";
import { ColorToken, SizeToken } from ".";

declare module "styled-components" {
  export interface DefaultTheme {
    // Alert
    "$alert-bg-color": ColorToken;
    "$alert-border": string;
    "$alert-padding": SizeToken;
    "$alert-border-radius": SizeToken;
    "$alert-font-size": SizeToken;

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

export interface StyledComponentProps {
  theme: DefaultTheme;
}
