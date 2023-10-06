import { nanoid } from "nanoid";
import * as Type from "./TicketsService.type";
import * as Service from "../../Services/FirebaseService";

const GetTickets = async () : Promise<Type.ITicketData | null> => {
  try {
    const response = await Service.Get('tickets');

    return {tickets: response as any};
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

const UpdateTicket = async (ticket: Type.ITicket) => {
  try {
    console.log('ticket to update', ticket);
    const response = await Service.Put(ticket, 'tickets');
    console.log('putResponse', response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const CreateTicket = async (ticket: Type.ITicket) => {
  try {
    const response = await Service.Post(ticket, 'tickets');
 
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { GetTickets, UpdateTicket, CreateTicket };
