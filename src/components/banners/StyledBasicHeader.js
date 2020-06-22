import React from "react";
import styled from "styled-components";
import StyleBanner from "./StyledBanner";

const Logo = styled.img`
  width: 10vh;
  padding: 1rem;
`;

const BrandFontTitle = styled.h1`
  font-family: ${(p) => p.fontFamily};
  font-size: ${(p) => p.fontSize};
  text-transform: capitalize;
  margin-left: 30px;
`;

const StyledBasicHeader = ({ logo, title }) => {
  return (
    <StyleBanner>
      <Logo src={logo} />
      <BrandFontTitle>{title}</BrandFontTitle>
    </StyleBanner>
  );
};

export default StyledBasicHeader;
