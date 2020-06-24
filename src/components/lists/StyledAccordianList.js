import React from 'react';
import styled from 'styled-components';
import IoChevronDown from 'react-icons/lib/io/chevron-down';
import IoChevronUp from 'react-icons/lib/io/chevron-up';

import type { Node } from 'react';
import type { Theme } from '../../theme';

import IconBox from '../IconBox';
import FlexWrapper from '../FlexWrapper';
import Button from '../Button';
import DeleteIcon from './DeleteIcon';

type ItemProps = {
  open: boolean,
  titleContents: Node,
  bodyContents: Node,
  onToggle: (index: number) => void,
  onDelete: (index: number) => void,
};

type Props = {
  items: ItemProps[],
  onAdd: () => void,
  onToggle: (index: number) => void,
  onDelete: (index: number) => void,
  addText: string,
  disableOn: (items: ItemProps[]) => boolean,
};

type ThemeProps = ItemProps & { theme: Theme };

const ItemContainer = styled.div.withConfig({
  displayName: 'ItemContainer',
})`
  font-family: ${(props: ThemeProps) => props.theme.fontFamily};
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: ${({ open }: ItemProps) => (open ? '' : 'hidden')};
`;

const Title = styled.div.withConfig({
  displayName: 'Title',
})`
  color: ${(props: ThemeProps) => props.theme.colours.secondary03};
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  height: 14px;
  font-weight: 600;
  padding: ${(props: ThemeProps) => props.theme.layout.standardPadding};
  background-color: ${(props: ThemeProps) => props.theme.colours.primary03};
  ${({ theme }: { theme: ThemeProps }) =>
    theme.mixins.boxShadow(theme.colours.primary02, 0.6, 0, 0, 8, 0, 0)};
`;

const IsOpenIcon = styled(IoChevronUp).withConfig({
  displayName: 'IsOpenIcon',
})``;

const IsClosedIcon = styled(IoChevronDown).withConfig({
  displayName: 'IsClosedIcon',
})``;

const StyledIconBox = styled(IconBox)`
  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div.withConfig({
  displayName: 'ContentContainer',
})`
  margin: 1px 0 0 ${(props: ThemeProps) => props.theme.layout.doublePadding};
  max-height: ${({ visible }: { visible: boolean }) => (visible ? 'auto' : '0')};
`;

const ContentMargin = styled.div`
  border-left: 1px solid ${(props: ThemeProps) => props.theme.colours.secondary02};
  padding: 0 ${(props: ThemeProps) => props.theme.layout.standardPadding};
  margin: ${(props: ThemeProps) => props.theme.layout.standardPadding} 0;
`;

const DeleteButton = styled(DeleteIcon).withConfig({
  displayName: 'DeleteButton',
})`
  color: ${(props: { theme: Theme }) => props.theme.colours.primary01};
  cursor: pointer;
`;

const ButtonContainer = styled.div.withConfig({
  displayName: 'ButtonContainer',
})`
  display: flex;
  flex-direction: column;
  margin: ${(props: ThemeProps) => props.theme.layout.standardPadding};
`;

const AccordionItem = ({ titleContents, bodyContents, open, onToggle, onDelete }: ItemProps) => (
  <ItemContainer open={open}>
    <Title>
      <FlexWrapper>{titleContents}</FlexWrapper>
      <DeleteButton onClick={onDelete} />
      <StyledIconBox onClick={onToggle}>{open ? <IsOpenIcon /> : <IsClosedIcon />}</StyledIconBox>
    </Title>
    <ContentContainer visible={open}>
      <ContentMargin>{bodyContents}</ContentMargin>
    </ContentContainer>
  </ItemContainer>
);

export default function AccordionList({
  onAdd,
  addText,
  items,
  onToggle,
  onDelete,
  disableOn,
}: Props) {
  return (
    <div>
      {(items || []).map(({ titleContents, bodyContents, open }, index) => (
        <AccordionItem
          key={`item-${index + 1}`}
          titleContents={titleContents}
          bodyContents={bodyContents}
          open={open}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
      <ButtonContainer>
        <Button
          primary
          small
          fullWidth
          textTransform="uppercase"
          onClick={onAdd}
          disabled={disableOn(items)}
        >
          {addText}
        </Button>
      </ButtonContainer>
    </div>
  );
}
