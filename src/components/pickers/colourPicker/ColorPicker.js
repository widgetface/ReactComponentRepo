// @flow
import React, { useState } from "react";
import styled from "styled-components";

import ColourPreview from "./ColorPreview";

const ColourPickerWrapper = styled.div`
  height: 40px;
  width: 160px;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "#D0021B" : "#d6d6d6")};
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  font-family: inherit;
  width: 100px;
  height: 24px;
  border: none;
  padding: 0;
  margin: 0 0 0 10px;
  font-size: 14px;
  color: #474747;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: #ffffff;
  }
`;

const hexPattern = /[#][A-F0-9a-f]{6}/g;
const ColorPicker = ({
  hex,
  availableColours = [],
  disabled = false,
  saveBrandColour,
}) => {
  const [state, setState] = useState({
    hexValue: hex || "",
    error: "",
  });

  function onInputChange(hex) {
    let hexValue = hex;
    let error = false;
    if (hexValue === "") hexValue = "#";
    if (hexValue.length === 7) {
      error = isValidInputValue(hexValue);
      if (!error && saveBrandColour) saveBrandColour(hexValue);
    }
    setState(() => ({ hexValue, error }));
  }
  function onInputFocus() {
    if (state.hexValue.length === 0) onInputChange("#");
  }
  function onInputBlur() {
    if (state.hexValue === "#") {
      setState(() => ({ hexValue: "", valid: true, error: "" }));
    }
  }
  function isValidInputValue(hex) {
    if (availableColours.find((c) => c.value === hex) !== undefined) {
      return "This colour is already in your collection.";
    }
    if (hex.match(hexPattern) === null) return "This is not a valid hex value.";
    return "";
  }

  const { hexValue, error } = state;

  return (
    <div>
      <ColourPickerWrapper
        data-qa-hook="colour-picker-box"
        isInvalid={!disabled && error}
      >
        <StyledInput
          data-qa-hook="colour-picker-input"
          onFocus={onInputFocus}
          onChange={(e) => onInputChange(e.target.value)}
          onBlur={onInputBlur}
          value={hexValue}
          placeholder="Type hex value"
          disabled={disabled}
          maxLength="7"
        />
        <ColourPreview hexValue={hexValue} />
      </ColourPickerWrapper>
      {error && <div>{error}</div>}
    </div>
  );
};

export default ColorPicker;
