import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  leftIcon?: ReactNode;
  leftText?: string;
}
