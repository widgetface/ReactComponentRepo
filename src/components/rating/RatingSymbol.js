import React, { forwardRef, isValidElement } from "react";
import propTypes from "prop-types";

const { bool, element, object, oneOfType, string } = propTypes;

const defaultContainerStyle = {
  display: "inline-block",
  position: "relative",
  backGroundColor: "white",
};

const defaultIconStyle = {
  display: "inline-block",
  overflow: "hidden",
  top: 0,
  padding: "0.25em",
};

const RatingSymbol = forwardRef(
  (
    {
      active = false,
      disabled = false,
      icon = null,
      value = 0,
      symbolContainerStyle = {},
      symbolStyle = {},
      onMouseLeave = null,
      onMouseMove = null,
    },
    ref
  ) => {
    let iStyle = { ...defaultIconStyle, ...symbolStyle };
    let containerStyle = {
      ...defaultContainerStyle,
      ...{ cursor: !disabled ? "pointer" : "auto" },
      ...symbolContainerStyle,
    };

    function makeSymbol() {
      let isActive = disabled ? false : active;
      if (!icon) {
        return (
          <div style={isActive ? { color: "yellow" } : { color: "grey" }}>
            ★
          </div>
        );
      }
      // valid react element just return it
      if (isValidElement(icon)) {
        return icon;
      }
      // If it is an object, try to use it as a CSS style object.
      if (typeof icon === "object" && icon !== null) {
        return <span style={icon} />;
      }
      // If it is a string, use it as class names.
      if (Object.prototype.toString.call(icon) === "[object String]") {
        return <span className={icon} />;
      }
    }

    function handleMouseAction(e) {
      if (onMouseMove) {
        onMouseMove(value);
      }
    }
    return (
      <div style={containerStyle} ref={ref}>
        <div
          role="button"
          aria-label={`rating bar symbol value=${value}`}
          style={iStyle}
          onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
          onClick={handleMouseAction}
          onMouseMove={handleMouseAction}
          onTouchMove={handleMouseAction}
          onTouchEnd={handleMouseAction}
        >
          {makeSymbol()}
        </div>
      </div>
    );
  }
);

RatingSymbol.propTypes = {
  disabled: bool,
  icon: oneOfType([element, object, string]),
  symbolContainerStyle: object,
  symbolStyle: object,
};

export default RatingSymbol;
