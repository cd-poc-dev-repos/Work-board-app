import { nanoid } from "nanoid";
import * as Type from './Details.type';

const createTicket = (title: string, description: string, tickets: Type.ITicket[]) => {
  const updatedTickets = [...tickets];
  const newTicket = { id: nanoid(), title: title, description: description, state: 'New'};

  updatedTickets.push(newTicket);

  return updatedTickets;
}

export { createTicket }