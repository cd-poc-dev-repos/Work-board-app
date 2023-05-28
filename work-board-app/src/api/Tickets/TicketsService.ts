import { nanoid } from "nanoid";
import * as Type from "./TicketsService.type";

const GetTickets = (): Type.ITicketData => {
  return {
    tickets: [
      {
        id: nanoid(),
        title: "Initial project setup",
        description: "Set up the project",
        state: 'New'
      },
    ],
  };
};

export { GetTickets };
