import * as Service from "../../api/Tickets/TicketsService";

const fetchTickets = () => {
  const data = Service.GetTickets();
  return data;
};

export { fetchTickets };
