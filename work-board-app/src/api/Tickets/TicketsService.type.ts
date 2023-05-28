import { TicketState } from "../../common/components/constant/enums";

interface ITicket {
  id: number;
  title: string;
  description: string;
  state: TicketState;
}

interface ITicketData {
  tickets: ITicket[];
}

export type { ITicket, ITicketData };
