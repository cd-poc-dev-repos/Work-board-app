import React from "react";
import Board from "./layouts/Board";
import { DragDropContext } from "react-beautiful-dnd";
import { TicketState } from "../../common/components/constant/enums";
import * as Logic from './WorkBoard.logic';
import * as Type from './WorkBoard.type';
import * as Styled from "./WorkBoard.style";

const WorkBoard = () => {
  const [tickets, setTickets] = React.useState<Type.ITicket[]>([]);
  
  const handleDragEnd = (e: any) => {
    console.log("DRAGEND", e);
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
        <Board name="New" tickets={tickets.filter(x => x.state === TicketState.New )} />
        <Board name="Commited" tickets={tickets.filter(x => x.state === TicketState.Commited )} />
        <Board name="In Progress" tickets={tickets.filter(x => x.state === TicketState.InProgress )} />
        <Board name="In Test" tickets={tickets.filter(x => x.state === TicketState.InTest )} />
        <Board name="Done" tickets={tickets.filter(x => x.state === TicketState.Done )} />
      </DragDropContext>
    </Styled.Container>
  );
};

export default WorkBoard;
