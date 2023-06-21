import * as React from "react";
import { TopNavWrapper, Img, Title } from "./styles";
import LogoImg from "../../assets/logo.svg";

export const TopNav = () => {
  return (
    <TopNavWrapper>
      <Img src={LogoImg} alt="Planned logo" />

      <Title>Planned test</Title>
    </TopNavWrapper>
  );
};
