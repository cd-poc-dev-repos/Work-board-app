import React from "react";
import * as Type from './SiteHeader.type';
import * as Styled from './SiteHeader.style';

const SiteHeader = ({ AddNewTaskCallback }: Type.ISiteHeaderProps)=> {
  return (
    <Styled.Container>
      <Styled.Title>Project A</Styled.Title>
      <Styled.Button onClick={AddNewTaskCallback}>+ Add Task</Styled.Button>
    </Styled.Container>
  );
};

export default SiteHeader;
