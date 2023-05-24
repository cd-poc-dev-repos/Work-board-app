import React from "react";
import * as Type from "./Ticket.type";
import * as Styled from "./Ticket.style";

const Ticket = ({ provided, title }: Type.ITicket) => {
  return (
    <Styled.Container
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      variant="outlined"
    >
        <Styled.HeaderContainer>
            <Styled.HeaderContent>{title}</Styled.HeaderContent>
        </Styled.HeaderContainer>
        <Styled.DetailContainer>
            <Styled.DetailContent>description</Styled.DetailContent>
        </Styled.DetailContainer>
    </Styled.Container>
  );
};

export default Ticket;
