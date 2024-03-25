import { ITicket } from '../Board/Board.type';

interface IDetails {
  ticketId: string | null,
  tickets: ITicket[],
  updateTickets: () => void,
  handleCloseModal: () => void
}

export type { IDetails, ITicket };
