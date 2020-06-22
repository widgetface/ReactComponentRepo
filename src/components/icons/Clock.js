import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  svg > rect:not([fill="none"]) {
    fill: ${(props) => props.colour};
  }
  svg > path:not([fill]) {
    fill: ${(props) => props.colour};
  }
  svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;
export default function Clock({ colour, width, height }) {
  return (
    <IconWrapper colour={colour} width={width} height={height}>
      <svg viewBox="0 0 24 24" width={width} height={height}>
        <g fillRule="nonzero" fill={colour}>
          <path d="M20.485 3.515A11.922 11.922 0 0 0 12 0a11.922 11.922 0 0 0-8.485 3.515A11.922 11.922 0 0 0 0 12c0 3.205 1.248 6.219 3.515 8.485A11.922 11.922 0 0 0 12 24c3.205 0 6.219-1.248 8.485-3.515A11.922 11.922 0 0 0 24 12c0-3.205-1.248-6.219-3.515-8.485zm-.994 15.976c-2.001 2-4.661 3.103-7.491 3.103s-5.49-1.102-7.49-3.103C2.507 17.49 1.405 14.83 1.405 12S2.508 6.51 4.51 4.51C6.51 2.507 9.17 1.405 12 1.405s5.49 1.102 7.49 3.103C21.493 6.51 22.595 9.17 22.595 12s-1.102 5.49-3.103 7.49z" />
          <path d="M11.885 2.308c-5.281 0-9.577 4.296-9.577 9.577 0 5.28 4.296 9.577 9.577 9.577 5.28 0 9.577-4.297 9.577-9.577 0-5.281-4.297-9.577-9.577-9.577zm0 17.752c-4.508 0-8.176-3.667-8.176-8.175 0-4.508 3.668-8.176 8.176-8.176s8.175 3.668 8.175 8.176-3.667 8.175-8.175 8.175z" />
          <path d="M17.538 8.196l-.94-1.042-3.666 3.19a1.904 1.904 0 0 0-1.58-.073L9.305 8.276l-.998.988 2.026 1.976c-.104.23-.162.483-.162.75 0 1.024.848 1.856 1.89 1.856 1.041 0 1.89-.832 1.89-1.856 0-.205-.036-.403-.099-.588l3.685-3.206zm-5.476 4.258a.469.469 0 0 1-.473-.464c0-.256.212-.464.473-.464.26 0 .472.208.472.464a.469.469 0 0 1-.472.464z" />
        </g>
      </svg>
    </IconWrapper>
  );
}
Clock.defaultProps = {
  colour: "#000",
  width: 30,
  height: 30,
};
