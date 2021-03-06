import React from "react";
import IconWrapper from "./IconWrapper";

export default function ArrowDown({ colour, width, height }) {
  return (
    <IconWrapper colour={colour} width={width} height={height}>
      <svg viewBox="0 0 10 10" width={width} height={height}>
        <g fill="none" fillRule="evenodd">
          <path d="M-2-2h14v14H-2z" />
          <path
            fill={colour}
            d="M5.16 8.762L10 3.922 9.078 3 5.16 6.918 1.242 3l-.922.922z"
          />
        </g>
      </svg>
    </IconWrapper>
  );
}
ArrowDown.defaultProps = {
  colour: "#000",
  width: 30,
  height: 30,
};
