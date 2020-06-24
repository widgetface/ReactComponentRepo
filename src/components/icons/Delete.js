import React from "react";
import IconWrapper from "./IconWrapper";

export default function Delete({ colour, width, height }) {
  return (
    <IconWrapper colour={colour} width={width} height={height}>
      <svg width={width} height={height} viewBox="0 0 14 14">
        <g id="delete-icon" fill="none" fill-rule="evenodd">
          <g id="Icon-/-Bin" fill={colour} fill-rule="nonzero">
            <path
              d="M6.21428571,1 C5.35,1 4.64285714,1.675 4.64285714,2.5 L3.07142857,2.5 C2.20714286,2.5 1.5,3.175 1.5,4 L12.5,4 C12.5,3.175 11.7928571,2.5 10.9285714,2.5 L9.35714286,2.5 C9.35714286,1.675 8.65,1 7.78571429,1 L6.21428571,1 Z M3,12.696 C3,12.872 3.12774451,13 3.30339321,13 L10.6966068,13 C10.8722555,13 11,12.872 11,12.696 L11,5 L9.40319361,5 L9.40319361,10.6 C9.40319361,11.048 9.05189621,11.4 8.60479042,11.4 C8.15768463,11.4 7.80638723,11.048 7.80638723,10.6 L7.80638723,5 L6.20958084,5 L6.20958084,10.6 C6.20958084,11.048 5.85828343,11.4 5.41117764,11.4 C4.96407186,11.4 4.61277445,11.048 4.61277445,10.6 L4.61277445,5 L3.01596806,5 L3,12.696 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
}

Delete.defaultProps = {
  colour: "#000",
  width: 30,
  height: 30,
};
