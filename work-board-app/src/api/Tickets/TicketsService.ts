import { TicketState } from "../../common/components/constant/enums";
import * as Type from "./TicketsService.type";

const GetTickets = (): Type.ITicketData => {
  return {
    tickets: [
      {
        id: 1,
        title: "Initial project setup",
        description: "Set up the project",
        state: TicketState.New,
      },
    ],
  };
};

export { GetTickets };
