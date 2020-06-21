import React from "react";
import { AnimePost } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

import "./storystyles.scss";

storiesOf("Component | Comments/AnimatedPost", module)
  .addDecorator(withInfo)
  .add("With title and text", () => {
    const text = [
      [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla est, laoreet sed nunc ut, blandit tristique mauris. Quisque at hendrerit nibh, non rhoncus orci",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi nibh justo, porta vel tempus sit amet, porttitor non erat",
      ],
    ];
    return (
      <div className="animated-post">
        <AnimePost title="My Post" text={text} />
      </div>
    );
  });
