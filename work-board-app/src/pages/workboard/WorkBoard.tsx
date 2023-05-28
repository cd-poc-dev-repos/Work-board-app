import React from "react";
import Board from "./layouts/Board";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import * as Logic from "./WorkBoard.logic";
import * as Type from "./WorkBoard.type";
import * as Styled from "./WorkBoard.style";

const WorkBoard = () => {
  const [tickets, setTickets] = React.useState<Type.ITicket[]>([]);
  
  const handleDragEnd = (e: DropResult) => {
    const { destination, draggableId  } = e;

    if(destination) {
      const updatedTickets = Logic.updateTickets(destination.droppableId, draggableId, tickets);
      
      setTickets(updatedTickets);
    }
  };

  React.useEffect(() => {
    const init = () => {
      const data = Logic.fetchTickets();
      setTickets(data.tickets);
    };

    init();
  }, [])

  return (
    <Styled.Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Board name="New" tickets={tickets.filter(x => x.state === "New" )} />
        <Board name="Commited" tickets={tickets.filter(x => x.state === "Commited" )} />
        <Board name="In Progress" tickets={tickets.filter(x => x.state === "In Progress")} />
        <Board name="In Test" tickets={tickets.filter(x => x.state === "In Test" )} />
        <Board name="Done" tickets={tickets.filter(x => x.state === "Done" )} />
      </DragDropContext>
    </Styled.Container>
  );
};

export default WorkBoard;
