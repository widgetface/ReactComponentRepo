import React from "react";
import styled from "styled-components";
import "./App.scss";

const Button = styled("button")(["background: palevioletred;", "color: #fff;"]);


function App() {
  return (
    <div className="container">
      <div>
        To see the components close the browser and run "npm run storybook"
      </div>
      <Button>Button</Button>
    </div>
  );
}

export default App;
