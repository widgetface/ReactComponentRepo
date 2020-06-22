import React from "react";
import styled from "styled-components";

export default styled.div`
  &&& {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.background};
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
  }
`;
