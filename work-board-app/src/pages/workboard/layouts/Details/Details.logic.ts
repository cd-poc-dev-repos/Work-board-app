import { nanoid } from "nanoid";
import * as Type from './Details.type';
import * as Service from '../../../../api/Tickets/TicketsService'

const createTicket = async (ticket: Type.ITicket) => {
  const { title, description } = ticket;

  const newTicket = { id: nanoid(), title: title, description: description, state: 'New' };

  const response = await Service.CreateTicket(newTicket);

  return response;
}

const saveTicket = (ticket: Type.ITicket, tickets: Type.ITicket[]) => {
  const updatedTickets = [...tickets];
  const indexToUpdate = updatedTickets.findIndex(x => x.id === ticket.id);

  updatedTickets[indexToUpdate] = ticket;

  return updatedTickets;
}


export { createTicket, saveTicket }