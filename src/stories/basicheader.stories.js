import React from "react";
import { BasicHeader } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Headers/BasicHeader", module)
  .addDecorator(withInfo)
  .add("BasicHeader types", () => {
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 50 }}>
          <BasicHeader type={1} text="I am an H1 type Header" />
          <BasicHeader type={2} text="I am an H2 type Header" />
          <BasicHeader type={3} text="I am an H3 type Header" />
          <BasicHeader type={4} text="I am an H4 type Header" />
          <BasicHeader type={5} text="I am an H5 type Header" />
        </div>
      </>
    );
  });
