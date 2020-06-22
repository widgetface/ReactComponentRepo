import React from "react";
import { Clock, DownArrow } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Icons/DownArrow", module)
  .addDecorator(withInfo)
  .add("DownArrowIcon", () => {
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 50 }}>
          <DownArrow />
        </div>
      </>
    );
  });
storiesOf("Component | Icons/Clock", module)
  .addDecorator(withInfo)
  .add("ClockIcon", () => {
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 50 }}>
          <Clock colour="blue" height={50} width={50} />
        </div>
      </>
    );
  });
