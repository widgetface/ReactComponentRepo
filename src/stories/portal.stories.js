import React, { useState } from "react";
import { Portal } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

import "./storystyles.scss";

storiesOf("Component | Modals/SimplePortal", module)
  .addDecorator(withInfo)
  .add("Simpl Portal", () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Close Modal" : "Open Modal"}
        </button>
        <div style={{ padding: 10, margin: 10 }}>
          <Portal nodeId="my-portal" open={open}>
            <div className="portal-div fade-in">
              <span>Welcome !</span>
            </div>
          </Portal>
        </div>
      </div>
    );
  });
