import React from "react";
import { StyledLabelCard } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Cards/StyledLabelCard", module)
  .addDecorator(withInfo)
  .add("StyledLabelCard", () => {
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 50 , maxWidth: 500}}>
          <StyledLabelCard headerText="Welcome" contentText="How are you?" subContentText="Have a good day" />
        </div>
      </>
    );
  });