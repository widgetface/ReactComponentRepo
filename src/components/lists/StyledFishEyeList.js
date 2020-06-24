import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(p) => p.direction || "row"};
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: blue;
  color: white;
`;
const ListItem = styled.div`
  font-size: 1rem;
  padding: 0.4rem;
  transition: all 300ms ease-in-out;
  margin: 0.3rem;

  ${(p) =>
    p.value === p.currentIndex &&
    css`
      transform: scale(${p.scaleMax});
      z-index: 100;
    `}
  ${(p) =>
    p.value === p.currentIndex - 1 &&
    css`
      transform: scale(calc(${p.scaleMax} - ${p.scaleIncrement}));
      z-index: 90;
    `}
  ${(p) =>
    p.value === p.currentIndex + 1 &&
    css`
      transform: scale(calc(${p.scaleMax} - ${p.scaleIncrement}));
      z-index: 95;
    `}
  ${(p) =>
    p.value === p.currentIndex - 2 &&
    css`
      transform: scale(calc(${p.scaleMax} - (${p.scaleIncrement} * 2)));
      z-index: 80;
    `}
  ${(p) =>
    p.value === p.currentIndex + 2 &&
    css`
      transform: scale(calc(${p.scaleMax} - (${p.scaleIncrement} * 2)));
      z-index: 85;
    `}
  ${(p) =>
    p.currentIndex === -1 &&
    css`
      transform: scale(1);
      z-index:0;
    `}
`;

function App({
  scaleMax = 2.5,
  scaleIncrement = 0.5,
  data = [],
  onClick,
  renderListItemFunc = (i, index) => i,
}) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  function handleOnClick({ target: { id } }) {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Container
      onMouseLeave={() => {
        setCurrentIndex(-1);
      }}
    >
      {data.map((item, index) => {
        let id = item.id || index;
        return (
          <ListItem
            id={id}
            value={index}
            currentIndex={currentIndex}
            scaleMax={scaleMax}
            scaleIncrement={scaleIncrement}
            key={id}
            onClick={handleOnClick}
            onMouseOver={() => {
              setCurrentIndex(index);
            }}
          >
            {renderListItemFunc(item, index)}
          </ListItem>
        );
      })}
    </Container>
  );
}

export default App;
