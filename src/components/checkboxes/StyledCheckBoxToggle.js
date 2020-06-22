// @flow
import React, { useState } from "react";
import styled from "styled-components";

let i = 0;

const Container = styled.label`
  height: 20px;
  display: flex;
  justify-content: flex-end;
  min-width: 54px;
  border: 1px solid ${(p) => p.borderColor};
  border-radius: ${(p) => p.borderRadius};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 1px;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  transition: border 0.35s ease-in-out;
`;

const Slider = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  transform: translatex(${({ value }) => (value ? "0" : "-100%")});
  transition: transform 0.35s ease-in-out, background 0.35s ease-in-out;
  background: ${(p) => p.backgroundColor};
`;

const ComponentContainer = styled.div`
  display: flex;
  font-size: 10px;
  flex: 1 0 0%;
  justify-content: center;
  color: ${(p) => p.color};
  padding: 1px;
  margin: 0;
`;

const HiddenCheckbox = styled.input
  .withConfig({
    displayName: "HiddenCheckbox",
  })
  .attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckboxToggle = ({
  value,
  onChange,
  onComponent,
  offComponent,
  name,
  disabled,
  backgroundColor = "#f00ff",
  borderColor = "#e0e0e0",
  borderRadius = 5,
  color = "#e0e0e0",
}) => {
  const id = `checkbox-${(i += 1)}`;
  const [toggle, setToggle] = useState(true);

  function onhandleChange(e) {
    setToggle(!toggle);
    if (onChange) {
      onChange();
    }
  }
  return (
    <Container
      value={toggle}
      htmlFor={id}
      disabled={disabled}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      <HiddenCheckbox
        id={id}
        name={name}
        value={toggle}
        onChange={onhandleChange}
        disabled={disabled}
      />
      <Slider value={toggle} color={color} backgroundColor={backgroundColor}>
        <ComponentContainer color={color}>
          {toggle ? onComponent : offComponent}
        </ComponentContainer>
      </Slider>
    </Container>
  );
};

StyledCheckboxToggle.defaultProps = {
  onComponent: <span>ON</span>,
  offComponent: <span>OFF</span>,
  onChange: () => {},
  disabled: false,
};

export default StyledCheckboxToggle;
