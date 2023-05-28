import React from "react";
import Board from "./layouts/Board";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Box } from '@mui/material';
import AddNewIcon from "../../media/images/createnew.png";
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

  const handleAddNewTicket = () => {
    const updatedTickets = Logic.createTicket(tickets);
    
    setTickets(updatedTickets);
  }

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
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'absolute', bottom: 70, right: 20  }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
          <SpeedDialAction
            key='Add'
            tooltipTitle='Add'
            icon={<Styled.SpeedDialIcon src={AddNewIcon} alt='new' />}
            onClick={handleAddNewTicket}
          />
      </SpeedDial>
    </Box>
    </Styled.Container>
  );
};

export default WorkBoard;
