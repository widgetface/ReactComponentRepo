import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  color: ${(props) => props.color || "#FFF"};
  background-color: ${(props) => props.background || "#0065DB"};
  border-bottom: 3px solid ${(props) => props.bottomBorder || "#444444"};
`;
const StyledBanner = styled.div`
  font-family: ${(props) => props.fontFamily || 20}px;
  font-size: ${(props) => props.fontSize || 20}px;
  height: 100px;
  display: flex;
  align-items: center;
  max-width: 1366px;
  margin: auto;
`;

export default function Banner(props) {
  return (
    <BannerContainer>
      <StyledBanner {...props} />
    </BannerContainer>
  );
}
