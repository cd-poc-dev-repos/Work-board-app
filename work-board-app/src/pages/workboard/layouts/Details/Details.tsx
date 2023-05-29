import React from "react";
import { Button, TextField } from "@mui/material";
import * as Type from "./Details.type";
import * as Logic from "./Details.logic";
import * as Styled from "./Details.style";

const Details = ({ ticketId, tickets, updateTickets, handleCloseModal }: Type.IDetails) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleAddNewTicket = (title: string, description: string, tickets: Type.ITicket[]) => {
    const updatedTickets = Logic.createTicket(title, description, tickets);

    updateTickets(updatedTickets);
    handleCloseModal();
  };

  const handleChange = (e: any, updateField: (value: string) => void) => {
    const { value } = e.target;

    updateField(value);
  };

  React.useEffect(() => {
    const init = () => {
      if (ticketId) {
        const ticket = tickets.find(x => x.id === ticketId);

        if (ticket) {
          setTitle(ticket?.title);
          setDescription(ticket?.description);
        }
      }
    };

    init();
  }, [ticketId])

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderTitle label='title' onChange={(e) => handleChange(e, setTitle)}/>
      </Styled.Header>
      <Styled.ContentContainer>
        <Styled.Content label='description' multiline onChange={(e) => handleChange(e, setDescription)}/>
      </Styled.ContentContainer>
      <Styled.Footer>
        <Button onClick={() => handleAddNewTicket(title, description, tickets)}>add</Button>
    </Styled.Footer>
    </Styled.Container>
  );
};

export default Details;
