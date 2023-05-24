import React from "react";
import Board from "./layouts/Board";
import * as Styled from "./WorkBoard.style";
import { DragDropContext } from "react-beautiful-dnd";

const WorkBoard = () => {
    const handleDragEnd = () => {
        console.log("DRAGEND");
      };

  return (
    <Styled.Container>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Board name='droppable_1' />
      <Board name='droppable_2' />
      <Board name='droppable_3' />
      <Board name='droppable_4' />
    </DragDropContext>
    </Styled.Container>
  );
};

export default WorkBoard;
