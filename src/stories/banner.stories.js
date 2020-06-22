import React from "react";
import { StyledBasicHeader } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import logo from "../assets/imgs/logo-white.png";
storiesOf("Component | Banners/StyledBasicHeader", module)
  .addDecorator(withInfo)
  .add("StyledBasicHeader", () => {
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 50 }}>
          <StyledBasicHeader title="Your title goes here" logo={logo} />
        </div>
      </>
    );
  });
