import React from "react";
import { SpinCard180 } from "../components";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Cards/SpinCard180", module)
  .addDecorator(withInfo)
  .add("A simple spincard", () => {
    const listItems = ["A short story", "A long story", "A funny story"];
    const boxItems = [
      "Go to story short story ",
      "Go to long story",
      "Go to funny story",
    ];
    return (
      <div style={{ marginTop: 50 }}>
        <SpinCard180 listItem={listItems} boxItems={boxItems} />
      </div>
    );
  });
