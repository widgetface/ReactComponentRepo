import React from "react";
import { StyledSearchNavBar } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import {EdinburghOne, EdinburghTwo, EdinburghThree, EdinburghFour, EdinburghFive, EdinburghSix} from '../assets/imgs'
storiesOf("Component | Navigation/StyledSearchNavBar", module)
  .addDecorator(withInfo)
  .add("StyledSearchNavBar", () => {
   
      const headers=  [
          {link:'#', label: 'Home'}, 
          {link:'#', label: 'First Page'}, 
          {link:'#', label: 'SecondPage'}, 
        ]
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 10, zIndex: 1000 }}>
          <StyledSearchNavBar headings={headers}/>
        </div>
      </>
    );
  });
