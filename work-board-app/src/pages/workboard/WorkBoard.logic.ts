import { nanoid } from "nanoid";
import * as Service from "../../api/Tickets/TicketsService";
import * as Type from "./WorkBoard.type";

const fetchTickets = () => {
  const data = Service.GetTickets();
  return data;
};

const createTicket = (ticket: Type.ITicket) => {
  const response = Service.CreateTicket(ticket);

  return response;
}

const updateTickets = async (droppableId: string, draggableId: string, tickets: Type.ITicket[]) => {
  let response;
  let draggedTicket = tickets.find(x => x.id === draggableId);

  if (draggedTicket && droppableId) {
    response = await Service.UpdateTicket({...draggedTicket, state: droppableId});
  }

  return response;
}

export { fetchTickets, createTicket, updateTickets };
