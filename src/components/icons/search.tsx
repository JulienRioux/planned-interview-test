import * as React from "react";
import { FunctionComponent } from "react";
import { ColorToken } from "../../theme";

interface IconSearchProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export const IconSearch: FunctionComponent<IconSearchProps> = ({
  size = 16,
  strokeWidth = 2,
  color = ColorToken.LightGrey,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      color={color}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0 7 7 0 1 0-14 0"></path>
      <path d="M21 21l-6-6"></path>
    </svg>
  );
};
