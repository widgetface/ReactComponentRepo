import React from "react";
import propTypes from "prop-types";

const { bool, number } = propTypes;

const ratedStyle = {
  fontSize: "0.65em",
  fontStyle: "italic",
};

const personStr = "person has rated this item";
const peopleStr = "people have rated this item";

const RatingReviews = ({
  medianRating = 0,
  rated = false,
  reviewNumber = 0,
}) => {
  let reviews = rated ? reviewNumber + 1 : reviewNumber;
  console.log(reviews);
  let reviewStr =
    reviews && reviews > 1
      ? `${reviews} ${peopleStr}`
      : `${reviews} ${personStr}`;

  return (
    <>
      {rated ? (
        <div>
          <div>
            <span style={ratedStyle}>{reviewStr}</span>
          </div>
          <div>
            <span style={ratedStyle}>{`Current rating ${medianRating}`}</span>
          </div>
        </div>
      ) : (
        <span style={ratedStyle}>{"Be the first to rate this item"}</span>
      )}
    </>
  );
};

RatingReviews.propTypes = {
  RatingReviews: number,
  rated: bool,
  reviewNumber: number,
};

export default RatingReviews;
