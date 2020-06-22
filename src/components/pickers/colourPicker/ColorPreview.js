import React from "react";
import styled from "styled-components";

const PreviewExt = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #d6d6d6;
  margin: 0 10px 0 0;
`;
const PreviewInt = styled.div`
  height: 18px;
  width: 18px;
  margin: 3px;
  ${(props) =>
    props.hexValue &&
    props.hexValue.length === 7 &&
    `background-color: ${props.hexValue}`};
`;

export default function ColourPreview({ hexValue }) {
  return (
    <PreviewExt>
      <PreviewInt data-qa-hook="colour-preview" hexValue={hexValue} />
    </PreviewExt>
  );
}
