import { nanoid } from "nanoid";
import * as Type from './Details.type';

const createTicket = (ticket: Type.ITicket, tickets: Type.ITicket[]) => {
  const updatedTickets = [...tickets];
  const { title, description } = ticket;

  const newTicket = { id: nanoid(), title: title, description: description, state: 'New' };

  updatedTickets.push(newTicket);

  return updatedTickets;
}

const saveTicket = (ticket: Type.ITicket, tickets: Type.ITicket[]) => {
  const updatedTickets = [...tickets];
  const indexToUpdate = updatedTickets.findIndex(x => x.id === ticket.id);

  updatedTickets[indexToUpdate] = ticket;

  return updatedTickets;
}


export { createTicket, saveTicket }