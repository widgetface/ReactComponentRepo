import React from "react";
import { AnimeProgress } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Loading/AnimeProgress", module)
  .addDecorator(withInfo)
  .add("With title and text", () => {
    return (
      <div>
        <AnimeProgress value={50} message="Loading..." />
      </div>
    );
  });
