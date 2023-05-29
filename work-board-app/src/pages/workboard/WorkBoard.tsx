import React from "react";
import Board from "./layouts/Board";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Box } from "@mui/material";
import AddNewIcon from "../../media/images/createnew.png";
import Modal from '../../common/components/Modal';
import * as Logic from "./WorkBoard.logic";
import * as Type from "./WorkBoard.type";
import * as Styled from "./WorkBoard.style";
import Details from "./layouts/Details/Details";

const WorkBoard = () => {
  const [tickets, setTickets] = React.useState<Type.ITicket[]>([]);
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  
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
  }, []);

  return (
    <>
      <Styled.Container>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Board name="New" tickets={tickets.filter(x => x.state === "New" )} />
          <Board name="Commited" tickets={tickets.filter(x => x.state === "Commited" )} />
          <Board name="In Progress" tickets={tickets.filter(x => x.state === "In Progress")} />
          <Board name="In Test" tickets={tickets.filter(x => x.state === "In Test" )} />
          <Board name="Done" tickets={tickets.filter(x => x.state === "Done" )} />
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
            icon={<Styled.SpeedDialIcon src={AddNewIcon} alt="new" />}
            onClick={() => setShowDetailModal(true)}
          />
        </SpeedDial>
      </Box>
      </Styled.Container>
      <Modal show={showDetailModal} handleCloseModal={setShowDetailModal}>
        <Details ticketId={null} tickets={tickets} updateTickets={setTickets} handleCloseModal={() => setShowDetailModal(false)}/>
      </Modal>
    </>
  );
};

export default WorkBoard;
