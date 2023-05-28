import React from "react";
import { nanoid } from "nanoid";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Ticket from "../../../../common/components/Ticket";
import * as Type from './Board.type';

const Board = ({ name }: Type.IBoard ) => {
  const grid = 8;
  const [tickets, setTickets] = React.useState<Type.ITicketData[]>([]);

  const getListStyle = (isDraggingOver: boolean) => ({
    width: 'auto',
    padding: grid,
    border: '1px solid black',
    background: isDraggingOver ? "lightblue" : "rgb(237, 237, 237)"
  });

  React.useEffect(() => {
    const init = () => {
      setTickets([
        { id: 1, title: nanoid() },
        { id: 2, title: nanoid() },
        { id: 3, title: nanoid() },
      ]);
    };

    init();
  }, []);

  return (
      <Droppable droppableId={name}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {tickets.map((item: Type.ITicketData, index) => (
              <Draggable
                key={item.id}
                draggableId={`ticket-${name}-${item.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                    <Ticket id={item.id} title={item.title} provided={provided} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  );
};

export default Board;
