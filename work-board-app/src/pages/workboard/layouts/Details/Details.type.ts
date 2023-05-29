import { ITicket } from '../Board/Board.type';

interface IDetails {
  ticketId: string | null,
  tickets: ITicket[],
  updateTickets: (tickets: ITicket[]) => void,
  handleCloseModal: () => void
}

export type { IDetails, ITicket };
