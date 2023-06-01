import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Box } from "@mui/material";
import AddNewIcon from "../../media/images/createnew.png";
import Modal from "../../common/components/Modal";
import Board from "./layouts/Board";
import Details from "./layouts/Details/Details";
import * as Logic from "./WorkBoard.logic";
import * as Type from "./WorkBoard.type";
import * as Styled from "./WorkBoard.style";

const WorkBoard = () => {
  const [tickets, setTickets] = React.useState<Type.ITicket[]>([]);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [currentTicketId, setCurrentTicketId] = React.useState<string | null>(null);
  
  const handleDragEnd = (e: DropResult) => {
    const { destination, draggableId  } = e;

    if(destination) {
      const updatedTickets = Logic.updateTickets(destination.droppableId, draggableId, tickets);
      
      setTickets(updatedTickets);
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
      const data = Logic.fetchTickets();

      setTickets(data.tickets);
    };

    init();
  }, []);

  return (
    <>
      <Styled.Container>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Board name="New" tickets={tickets.filter(x => x.state === "New" )} handleOpenTicket={handleOpenTicket} />
          <Board name="Commited" tickets={tickets.filter(x => x.state === "Commited" )} handleOpenTicket={handleOpenTicket} />
          <Board name="In Progress" tickets={tickets.filter(x => x.state === "In Progress")} handleOpenTicket={handleOpenTicket} />
          <Board name="In Test" tickets={tickets.filter(x => x.state === "In Test" )} handleOpenTicket={handleOpenTicket} />
          <Board name="Done" tickets={tickets.filter(x => x.state === "Done" )} handleOpenTicket={handleOpenTicket} />
        </DragDropContext>
        <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1, position: "absolute", bottom: 70, right: 20  }}>
        <SpeedDial
          ariaLabel="options"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            key="Add"
            tooltipTitle="Add"
            onClick={handleAddTicket}
            icon={<Styled.SpeedDialIcon src={AddNewIcon} alt="new" />}
          />
        </SpeedDial>
      </Box>
      </Styled.Container>
      <Modal show={showDetailModal} handleCloseModal={setShowDetailModal}>
        <Details
          tickets={tickets}
          ticketId={currentTicketId}
          updateTickets={setTickets}
          handleCloseModal={handleCloseTicket}
        />
      </Modal>
    </>
  );
};

export default WorkBoard;
