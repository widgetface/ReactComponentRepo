// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import styledMap from 'styled-map';

import "../styles/main.scss";

const defaultButtonStyles =[
    "outline: none;",
    "border: none;",
    "text-align: center;",
    "vertical-align: middle;",
    "background-color: ;"
]

const inactiveStyle = [
    "cursor: not allowed;",
    " opacity: 0.5"
]

const smallStyle=[

]

const StyledButton = styled.button.attrs({
  type: ({ type }) => type || 'button',
})`
  ${({ link }) =>
    link &&
    css`
      text-decoration: underline;
      background-color: transparent;
    ` }${p => {
      const { colours: c } = theme;
      let bg; // Background
      let fg; // Foreground
      let hl; // Highlight
      let border = 'none';

      if (disabled) {
        bg = c.disabled01;
        hl = c.disabled01;
        fg = c.disabled02;
      } else if (primary) {
        bg = c.primary01;
        hl = c.primary02;
        fg = c.primary03;
      } else if (danger) {
        bg = c.danger01;
        hl = c.danger02;
        fg = c.danger03;
      } else {
        bg = c.secondary01;
        hl = c.secondary02;
        fg = c.secondary03;
        border = `1px solid ${c.secondary03}`;

        if (link) {
          return css`
            color: ${c.linkAction};
            &:active {
              color: ${hl};
            }
          `;
        }
      }

      if (link) {
        return css`
          color: ${bg};
          &:active {
            color: ${hl};
          }
        `;
      }

      return css`
        background-color: ${bg};
        border: ${border} !important;
        color: ${fg};
        &:active {
          background-color: ${hl};
        }
      `;
    }};

  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: ${p =>p.fontFamily};
  font-size: ${({ small, theme }) =>
    small ? theme.fontSizeSmall : theme.fontSizeContent};
  font-weight: ${({ small }) => (small ? 400 : 600)};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  outline: none;
  padding: ${({ small }) => (small ? '6px 0' : '10px 5px')};
  text-align: center;
  vertical-align: middle;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'} ${({ link }) =>
      !link &&
      css`
        padding-left: 30px;
        padding-right: 30px;
      `};
`;

const LabelButton = StyledButton.withComponent('label');

const StyledBasicButton = ({ label, ...props }) =>{
  if (label) return <LabelButton {...props} />;
  return <StyledButton {...props} />;
}

StyledBasicButton.defaultProps = {
  children: null,
  danger: false,
  disabled: false,
  fullWidth: false,
  label: false,
  link: false,
  primary: false,
  small: false,
};

export default StyledBasicButton