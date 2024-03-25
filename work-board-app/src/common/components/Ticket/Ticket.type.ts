import { DraggableProvided } from "react-beautiful-dnd";

interface ITicket {
  id: string,
  title: string;
  description: string;
  provided: DraggableProvided;
  handleClick: () => void;
}

export type { ITicket };
