import React from "react";
import { Reader } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Effects/Reader", module)
  .addDecorator(withInfo)
  .add("Reader", () => {
      const words = "Black Lives Matter";
    return (
 
        <div style={{ padding: 10, texAlign: "center", marginTop: 50 , maxWidth: 500}}>
        <Reader text={words} loop={true} />
        </div>

    );
  });