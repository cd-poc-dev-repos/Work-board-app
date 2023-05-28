import { DraggableProvided } from "react-beautiful-dnd";

interface ITicket {
  id: number,
  title: string;
  provided: DraggableProvided;
}

export type { ITicket };
