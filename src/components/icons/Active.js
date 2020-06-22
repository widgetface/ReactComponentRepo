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
export default function Active({ colour, width, height }: IconProps) {
  return (
    <IconWrapper colour={colour} width={width} height={height}>
      <svg viewBox="0 0 24 24" width="1em" height="1em">
        <g fill="none" fillRule="evenodd">
          <path stroke="#0065DB" d="M.5.5h23v23H.5z" />
          <g fillRule="nonzero" fill="#0065DB">
            <path d="M16.95 7.05A6.954 6.954 0 0 0 12 5c-1.87 0-3.628.728-4.95 2.05A6.954 6.954 0 0 0 5 12c0 1.87.728 3.628 2.05 4.95A6.954 6.954 0 0 0 12 19c1.87 0 3.628-.728 4.95-2.05A6.954 6.954 0 0 0 19 12c0-1.87-.728-3.628-2.05-4.95zm-.58 9.32A6.14 6.14 0 0 1 12 18.18a6.14 6.14 0 0 1-4.37-1.81A6.14 6.14 0 0 1 5.82 12a6.14 6.14 0 0 1 1.81-4.37A6.14 6.14 0 0 1 12 5.82a6.14 6.14 0 0 1 4.37 1.81A6.14 6.14 0 0 1 18.18 12a6.14 6.14 0 0 1-1.81 4.37z" />
            <path d="M11.933 6.346a5.593 5.593 0 0 0-5.587 5.587 5.593 5.593 0 0 0 5.587 5.586 5.593 5.593 0 0 0 5.586-5.586 5.593 5.593 0 0 0-5.586-5.587zm0 10.356a4.774 4.774 0 0 1-4.77-4.77c0-2.629 2.14-4.768 4.77-4.768 2.63 0 4.769 2.14 4.769 4.769 0 2.63-2.14 4.769-4.77 4.769z" />
            <path d="M15.23 9.78l-.547-.607-2.14 1.86a1.11 1.11 0 0 0-.921-.042l-1.193-1.163-.583.576 1.182 1.153a1.06 1.06 0 0 0-.094.437c0 .597.494 1.083 1.102 1.083.608 0 1.102-.486 1.102-1.083 0-.12-.02-.235-.057-.343l2.15-1.87zm-3.194 2.485a.273.273 0 0 1-.276-.27c0-.15.124-.271.276-.271.152 0 .275.121.275.27 0 .15-.123.27-.275.27z" />
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
}
Active.defaultProps = {
  colour: null,
  width: null,
  height: null,
};
