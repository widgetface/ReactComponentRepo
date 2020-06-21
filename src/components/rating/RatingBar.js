import React, { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import RatingSymbol from "./RatingSymbol";

const { bool, string, number, object, oneOf, func } = PropTypes;
const defaultDirection = "left";
const defaultScore = -1;

const row = {
  display: "flex",
  flex: "0 0 auto",
};

const column = {
  display: "flex",
  flexDirection: "column",
  flex: "0 0 auto",
};

const RatingBar = ({
  barDirection = "row",
  direction = "left",
  disabled = false,
  iconNumber = 0,
  id,
  score = defaultScore,
  symbolContainerStyle = {},
  symbolStyle = {},
  onRated,
}) => {
  let initialValue = hasScore() ? score : 0;
  const [rating, setRating] = useState(initialValue);

  const containerRef = useRef(null);
  let mousePosition = useRef(null);
  let symbolBoundingClientRec = useRef(null);
  let thresholdSymbol = useRef(null);

  useLayoutEffect(() => {
    mousePosition.current = containerRef.current.getBoundingClientRect();
    symbolBoundingClientRec.current = mousePosition.current;
  }, []);

  function onContainerMouseLeave(e) {
    mousePosition.current = e.target.getBoundingClientRect();
    setRatingScore();
  }

  function onContainerMouseMove(e) {
    mousePosition.current = e.target.getBoundingClientRect();
  }

  function handleMouseMove(value) {
    if (value !== rating) {
      setRatingState(value);
    }
  }

  function handleOnClick(e) {
    if (disabled) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    } else {
      setRatingScore();
    }
  }

  function isValid() {
    let {
      current: { left: mouseLeft, right: mouseRight },
    } = mousePosition;
    let {
      current: { left: symbolLeft, right: symbolRight },
    } = symbolBoundingClientRec;
    return direction === defaultDirection
      ? mouseLeft > symbolLeft
      : mouseRight < symbolRight;
  }

  function setRatingState(value) {
    if (!hasScore()) {
      isValid() ? setRating(value) : setRating(0);
    }
  }

  function generateIcons(number) {
    let refIndex = direction === defaultDirection ? 0 : iconNumber - 1;
    return Array(number)
      .fill(null)
      .map((n, index) => {
        let value = index + 1;
        let active = rating === 0 ? false : value <= rating;

        const iconProps = {
          key: index,
          active,
          id,
          value,
          symbolContainerStyle,
          symbolStyle,
          onClick: handleOnClick,
          onMouseMove: handleMouseMove,
        };

        return index === refIndex ? (
          <RatingSymbol
            ref={(symbol) => {
              thresholdSymbol.current = symbol;
            }}
            {...iconProps}
          />
        ) : (
          <RatingSymbol {...iconProps} />
        );
      });
  }

  function hasScore() {
    return score !== defaultScore;
  }

  function setRatingScore() {
    if (onRated) {
      onRated({ rating, id });
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseLeave={onContainerMouseLeave}
      onClick={handleOnClick}
    >
      <div
        onMouseMove={onContainerMouseMove}
        style={barDirection === "row" ? row : column}
      >
        {iconNumber > 0 && generateIcons(iconNumber)}
      </div>
    </div>
  );
};

RatingBar.propTypes = {
  iconNumber: number.isRequired,
  barDirection: oneOf(["row", "column"]),
  direction: oneOf(["left", "right"]),
  disabled: bool,
  id: string,
  score: number,
  symbolContainerStyle: object,
  symbolStyle: object,
  onRated: func,
};

export default RatingBar;
