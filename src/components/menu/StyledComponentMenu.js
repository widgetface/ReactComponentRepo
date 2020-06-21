import React, { useState } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";

const Container = styled.div`
  --toggler-width: 120px;
  --toggler-height: 40px;
  --toggler-bg-color: #fff;
  --toggler-active-bg-color: #fff;
  --toggle-border: 1px solid #add8e6;
  --menu-starting-top: 0px;
  --menu-ending-top: 45px;
  --menu-width: 200px;
  --menu-max-height: 200px;
  --menu-bg-color: #add8e6;
  --fade-from-color: transparent;
  --fade-to-color: #fff;
  position: relative;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Toggler = styled.button`
  position: relative;
  z-index: 2;
  width: var(--toggler-width);
  height: var(--toggler-height);
  background-color: ${(props) =>
    props.active
      ? "var(--toggler-active-bg-color)"
      : "var(--toggler-bg-color)"};
  border: var(--toggle-border);
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 350ms;
`;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 5px 0;
  color: var(--fade-to-color);
`;

const Menu = transition.div`
  position: absolute;
  top: var(--menu-ending-top);
  z-index: 1;
  box-sizing: border-box;
  width: var(--menu-width);
  padding: 0 20px;
  overflow: hidden;
  background-color: var(--menu-bg-color);
  border-radius: 5px;
  &:enter {
    top: var(--menu-starting-top);
    width: var(--toggler-width);
    max-height: var(--toggler-height);
    color: var(--fade-from-color);
    background-color: var(--toggler-bg-color);
  }
  &:enter-active {
    top: var(--menu-ending-top);
    width: var(--menu-width);
    max-height: var(--menu-max-height);
    color: var(--fade-to-color);
    background-color: var(--menu-bg-color);
    transition: all 350ms;
  }
  &:exit {
    top: var(--menu-ending-top);
    width: var(--menu-width);
    max-height: var(--menu-max-height);
    color: var(--fade-to-color);
    background-color: var(--menu-bg-color);
  }
  &:exit-active {
    top: var(--menu-starting-top);
    width: var(--toggler-width);
    max-height: var(--toggler-height);
    color: var(--fade-from-color);
    background-color: var(--toggler-bg-color);
    transition: all 350ms;
  }
`;

const StyledComponentMenu = ({
  listItems = [],
  renderListItemsFunc = (item) => item,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <MenuContainer>
        <Toggler active={showMenu} onClick={() => setShowMenu(!showMenu)}>
          Menu
        </Toggler>
        <Menu in={showMenu} timeout={350} unmountOnExit>
          <List>
            {listItems.map((item, index) => {
              return (
                <ListItem key={`${item}`}>{renderListItemsFunc(item)}</ListItem>
              );
            })}
          </List>
        </Menu>
      </MenuContainer>
    </Container>
  );
};

export default StyledComponentMenu;
