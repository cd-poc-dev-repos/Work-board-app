interface ITicket {
  id: string;
  title: string;
  description: string;
  state: string;
}

interface ITicketData {
  tickets: ITicket[];
}

export type { ITicket, ITicketData };
