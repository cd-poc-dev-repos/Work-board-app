import React from "react";
import { Button } from "@mui/material";
import * as Type from "./Details.type";
import * as Logic from "./Details.logic";
import * as Styled from "./Details.style";
import { nanoid } from "nanoid";
import { listenerCount } from "events";

const Details = ({ ticketId, tickets, updateTickets, handleCloseModal }: Type.IDetails) => {
  const [ticket, setTicket] = React.useState<Type.ITicket>({ id: '', title: '', description: '', state: '' });

  const handleSaveTicket = (ticket: Type.ITicket, tickets: Type.ITicket[]) => {
    let updatedTickets;
    const existingRecord = tickets.find(x => x.id === ticket.id);

    if (existingRecord) {
      updatedTickets = Logic.saveTicket(ticket, tickets);
    } else {
      updatedTickets = Logic.createTicket(ticket, tickets);
    }

    updateTickets(updatedTickets);
    handleCloseModal();
  };

  const handleChange = (e: any, field: 'title' | 'description' ) => {
    const { value } = e.target;
    let updatedTicket = { ...ticket };

    updatedTicket[field] = value;

    setTicket(updatedTicket);
  };

  React.useEffect(() => {
    const init = () => {
      if (ticketId) {
        const ticket = tickets.find(x => x.id === ticketId);
        
        if (ticket) {
          setTicket(ticket);
        } else {
          setTicket({ id: nanoid(), title: '', description: '', state: 'New' });
        }
      }
    };

    init();
  }, [ticketId])

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderTitle label='title' value={ticket?.title} onChange={(e) => handleChange(e, 'title')}/>
      </Styled.Header>
      <Styled.ContentContainer>
        <Styled.Content label='description' multiline value={ticket?.description} onChange={(e) => handleChange(e, 'description')}/>
      </Styled.ContentContainer>
      <Styled.Footer>
        <Button onClick={() => handleSaveTicket(ticket, tickets)}>Save and close</Button>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Details;
