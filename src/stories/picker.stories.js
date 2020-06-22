import React from "react";
import {
  BasePicker,
  ColorPicker,
  SizePicker,
  QuantityPicker,
} from "../components";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Picker/Picker", module).add(
  "With value and label",
  () => {
    return (
      <BasePicker
        label="Picker"
        value={0}
        leftClick={action("left click")}
        rightClick={action("right click")}
      />
    );
  }
);

storiesOf("Component | Picker/SizePicker", module).add(
  "With value and label",
  () => {
    return <SizePicker label="Pick a size" size="S" />;
  }
);

storiesOf("Component | Picker/QuantityPicker", module).add(
  "With value and label",
  () => {
    return <QuantityPicker label="Pick a quantity" quantity={100} />;
  }
);

storiesOf("Component | Picker/ColorPicker", module).add(
  "Choose a color",
  () => {
    return (
      <ColorPicker
        availableColours={[
          "#264653",
          "#2a9d8f",
          "#e9c46a",
          "#f4a261",
          "#e76f51",
        ]}
        saveBrandColour={action("saved color")}
        hex={null}
      />
    );
  }
);
