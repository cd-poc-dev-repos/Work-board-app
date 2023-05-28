import { nanoid } from "nanoid";
import * as Service from "../../api/Tickets/TicketsService";
import * as Type from "./WorkBoard.type";

const fetchTickets = () => {
  const data = Service.GetTickets();
  return data;
};

const updateTickets = (droppableId: string, draggableId: string, tickets: Type.ITicket[]) => {
  const updatedTickets = [...tickets];

    let draggedTicket = tickets.find(x => x.id === draggableId);

    if (draggedTicket && droppableId) {      
      const indexToUpdate = tickets.findIndex(x => x.id === draggableId);

      updatedTickets[indexToUpdate] = {...draggedTicket, state: droppableId};

    }
    return updatedTickets;
}

const createTicket = (tickets: Type.ITicket[]) => {
  const updatedTickets = [...tickets];
  const newTicket = { id: nanoid(), title: 'new', description: '', state: 'New'};

  updatedTickets.push(newTicket);

  return updatedTickets;
}

export { fetchTickets, updateTickets, createTicket };
