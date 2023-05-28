import { ITicket } from '../../../../api/Tickets/TicketsService.type';

interface IBoard {
  name: string;
  tickets: ITicket[]
}

interface ITicketData {
  id: number;
  title: string;
}

export type { IBoard, ITicketData, ITicket };
