import React from "react";
import { StyledComponentMenu } from "../components";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

storiesOf("Component | Menus/StyledComponentMenu", module)
  .addDecorator(withInfo)
  .add("With a simple list of numbers", () => {
    const items = [1, 2, 3, 4, 5];
    return (
      <div style={{ marginTop: 50 }}>
        <StyledComponentMenu listItems={items} />
      </div>
    );
  });
storiesOf("Component | Menus/StyledComponentMenu", module)
  .addDecorator(withInfo)
  .add("With a list of users", () => {
    const users = [
      { name: "John", age: 30, hobby: "running" },
      { name: "Jane", age: 20, hobby: "surfing" },
      { name: "Sally", age: 50, hobby: "motorbikes" },
    ];
    return (
      <div style={{ marginTop: 50 }}>
        <StyledComponentMenu
          listItems={users}
          renderListItemsFunc={({ name, age, hobby }) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 10,
                  margin: 10,
                  color: "black",
                  backgroundColor: "white",
                }}
                onClick={action(`You selected ${name}'s profile `)}
              >
                <div>{name}</div>
                <div>{age}</div>
                <div>{hobby}</div>
              </div>
            );
          }}
        />
      </div>
    );
  });
