import { DraggableProvided } from "react-beautiful-dnd";

interface ITicket {
  id: string,
  title: string;
  provided: DraggableProvided;
}

export type { ITicket };
