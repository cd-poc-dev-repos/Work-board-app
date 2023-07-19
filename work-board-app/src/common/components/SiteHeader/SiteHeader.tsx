import React from "react";
import * as Styled from './SiteHeader.style';

interface ISiteHeaderProps {
  AddNewTaskCallback: () => void;
}

const SiteHeader = ({ AddNewTaskCallback }: ISiteHeaderProps)=> {
  return (
    <Styled.Container>
      <Styled.Title>Project A</Styled.Title>
      <Styled.Button onClick={AddNewTaskCallback}>+ Add Task</Styled.Button>
    </Styled.Container>
  );
};

export default SiteHeader;
