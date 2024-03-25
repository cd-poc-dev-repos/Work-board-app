import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Modal from "../../common/components/Modal";
import SiteHeader from "../../common/components/SiteHeader";
import Board from "./layouts/Board";
import Details from "./layouts/Details/Details";
import * as Logic from "./WorkBoard.logic";
import * as Type from "./WorkBoard.type";
import * as Styled from "./WorkBoard.style";

const WorkBoard = () => {
  const [tickets, setTickets] = React.useState<Type.ITicket[]>([]);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [currentTicketId, setCurrentTicketId] = React.useState<string | null>(null);

  const updateTickets = async () => {
    const data = await Logic.fetchTickets();
    
    if (data) setTickets(data.tickets);
  }
  
  const handleDragEnd = async (e: DropResult) => {
    const { destination, draggableId  } = e;

    if(destination) {
      await Logic.updateTickets(destination.droppableId, draggableId, tickets);
      
      updateTickets();
    }
  };

  const handleAddTicket = () => {
    setShowDetailModal(true);
    setCurrentTicketId(null);
  }

  const handleOpenTicket = (ticketId: string) => {
    setShowDetailModal(true);
    setCurrentTicketId(ticketId);
  }

  const handleCloseTicket = () => {
    setCurrentTicketId(null);
    setShowDetailModal(false);
  };

  React.useEffect(() => {
    const init = () => {
      updateTickets();
    };

    init();
  }, []);

  return (
    <>
      <SiteHeader AddNewTaskCallback={handleAddTicket}/>
      <Styled.Container>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Board name="New" tickets={tickets.filter(x => x.state === "New" )} handleOpenTicket={handleOpenTicket} />
          <Board name="Commited" tickets={tickets.filter(x => x.state === "Commited" )} handleOpenTicket={handleOpenTicket} />
          <Board name="In Progress" tickets={tickets.filter(x => x.state === "In Progress")} handleOpenTicket={handleOpenTicket} />
          <Board name="In Test" tickets={tickets.filter(x => x.state === "In Test" )} handleOpenTicket={handleOpenTicket} />
          <Board name="Done" tickets={tickets.filter(x => x.state === "Done" )} handleOpenTicket={handleOpenTicket} />
        </DragDropContext>
      </Styled.Container>
      <Modal show={showDetailModal} handleCloseModal={setShowDetailModal}>
        <Details
          tickets={tickets}
          ticketId={currentTicketId}
          updateTickets={updateTickets}
          handleCloseModal={handleCloseTicket}
        />
      </Modal>
    </>
  );
};

export default WorkBoard;
