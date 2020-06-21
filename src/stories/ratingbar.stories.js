import React from "react";
import { RatingBar } from "../components";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | RatingBar/Standard RatingBar", module)
  .addDecorator(withInfo)
  .add("With a iconNumber of 5", () => {
    return (
      <div style={{ backgroundColor: "black", marginTop: 50 }}>
        <RatingBar iconNumber={5} onRated={action("thanks for your rating")} />
      </div>
    );
  });
storiesOf("Component | RatingBar/Standard RatingBar", module)
  .addDecorator(withInfo)
  .add("With a score of 3 and iconNumber 5", () => {
    return (
      <div style={{ backgroundColor: "black", marginTop: 50 }}>
        <RatingBar
          score={3}
          iconNumber={5}
          onRated={action("thanks for your rating")}
        />
      </div>
    );
  });
