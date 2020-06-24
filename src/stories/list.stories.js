import React from "react";
import { StyledFishEyeList } from "../components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import {EdinburghOne, EdinburghTwo, EdinburghThree, EdinburghFour, EdinburghFive, EdinburghSix} from '../assets/imgs'
storiesOf("Component | Lists/StyledFishEyeList", module)
  .addDecorator(withInfo)
  .add("StyledFishEyeList examples", () => {
      const data = [{title: 'A view of Edinburgh', src:EdinburghOne}, {title: 'castle', src:EdinburghTwo}, {title: 'A view of Edinburgh', src:EdinburghThree},{title: 'A view of Edinburgh', src:EdinburghFour},{title: 'A view of Edinburgh', src:EdinburghFive},{title: 'A view of Edinburgh', src:EdinburghSix}];
      const renderFunc = (item, index) => {
          return (< div className="img-list"><img src={item.src} alt={item.title}/></div>)
      }
      const letters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    return (
      <>
        <div style={{ padding: 10, texAlign: "center", marginTop: 10, zIndex: 1000 }}>
          <StyledFishEyeList data={data} renderListItemFunc={renderFunc}/>
        </div>
        <div style={{ padding: 10, texAlign: "center",  marginTop:50}}>
          <StyledFishEyeList data={letters} />
        </div>
      </>
    );
  });


 