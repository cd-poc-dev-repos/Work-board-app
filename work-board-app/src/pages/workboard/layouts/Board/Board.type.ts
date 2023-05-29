import { ITicket } from '../../../../api/Tickets/TicketsService.type';

interface IBoard {
  name: string;
  tickets: ITicket[]
}

interface ITicketData {
  id: string;
  title: string;
  description: string;
}

export type { IBoard, ITicketData, ITicket };
