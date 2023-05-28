import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Ticket from "../../../../common/components/Ticket";
import * as Type from "./Board.type";
import * as Styled from "./Board.style";

const Board = ({ name, tickets }: Type.IBoard ) => {
  const grid = 8;

  const getListStyle = (isDraggingOver: boolean) => ({
    width: "200px",
    height: "100%",
    minHeight: "200px",
    padding: grid,
    borderTop: "1px solid black",
    background: isDraggingOver ? "lightblue" : "rgb(237, 237, 237)"
  });
 
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.HeaderContent>{name}</Styled.HeaderContent>
      </Styled.HeaderContainer>
      <Droppable droppableId={name}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {tickets.map((item: Type.ITicketData, index) => (
              <Draggable
                key={item.id}
                draggableId={`${item.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                    <Ticket id={item.id} title={item.title} provided={provided} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Styled.Container>
  );
};

export default Board;
