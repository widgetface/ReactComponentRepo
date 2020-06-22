import React from "react";
import { StyledCheckBoxToggle } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StyledCheckboxToggle from "../components/checkboxes/StyledCheckBoxToggle";

storiesOf("Component | FormElement/StyledCheckBoxToggle", module)
  .addDecorator(withInfo)
  .add("StyledCheckBoxToggle", () => {
    return (
      <div>
        <div
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "center",
            maxWidth: 200,
            marginTop: 50,
          }}
        >
          <StyledCheckboxToggle
            name="MyCheckboxToggle"
            onChange={action("you clicked me")}
            value="on"
            backgroundColor="#00ab44"
            color="#ffd700"
          />
        </div>
      </div>
    );
  });
