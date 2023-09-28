import { nanoid } from "nanoid";
import * as Type from "./TicketsService.type";
import * as Service from "../../Services/FirebaseService";

const GetTickets = async () : Promise<Type.ITicketData | null> => {

  try {
    const response = await Service.GetTickets();

    return {tickets: response as Type.ITicket[]};
  } catch (error) {
    console.log('error', error);
    return null;
  }


  // return {
  //   tickets: [
  //     {
  //       id: nanoid(),
  //       title: "Initial project setup",
  //       description: "Set up the project",
  //       state: 'New'
  //     },
  //   ],
  // };
};

export { GetTickets };
