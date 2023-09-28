import React from "react";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import * as Type from "./Details.type";
import * as Logic from "./Details.logic";
import * as Styled from "./Details.style";

const Details = ({ ticketId, tickets, updateTickets, handleCloseModal }: Type.IDetails) => {
  const [ticket, setTicket] = React.useState<Type.ITicket>({ id: '', title: '', description: '', state: '' });

  const handleSaveTicket = async (ticket: Type.ITicket, tickets: Type.ITicket[]) => {
    let updatedTickets;
    const existingRecord = tickets.find(x => x.id === ticket.id);

    if (existingRecord) {
      updatedTickets = Logic.saveTicket(ticket, tickets);
    } else {
      updatedTickets = await Logic.createTicket(ticket);
    }

    updateTickets();
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
        <Styled.HeaderUpper>
          <Styled.HeaderId>12323</Styled.HeaderId>
          <Styled.HeaderTitle 
            variant="standard" 
            placeholder="title"
            value={ticket?.title} 
            onChange={(e) => handleChange(e, 'title')}
            InputProps={{
              disableUnderline: true
            }}
          />
        </Styled.HeaderUpper>
        <Styled.HeaderLower>
          <p>Christopher Dunn</p>
          <Styled.SaveButton onClick={() => handleSaveTicket(ticket, tickets)}>Save</Styled.SaveButton>
        </Styled.HeaderLower>
      </Styled.Header>
      <Styled.ContentUpperContainer>
        <div><p>State: </p><p>In Progress</p></div>
      </Styled.ContentUpperContainer>
      <Styled.ContentContainer>
        <label>Description</label>
        <Styled.Content multiline value={ticket?.description} onChange={(e) => handleChange(e, 'description')}/>
      </Styled.ContentContainer>
    </Styled.Container>
  );
};

export default Details;
