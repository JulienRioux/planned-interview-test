import * as React from "react";
import { FunctionComponent } from "react";
import { LayoutWrapper, ContentWrapper } from "./styles";
import { LayoutProps } from "./types";
import { TopNav } from "../top-nav";

/** Reusable layout component that contain the TopNav component. */
export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <TopNav />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};
