import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Ticket from "./Ticket";

describe("Ticket", () => {
  describe("When renders", () => {
    const props = {
      id: '1',
      title: "ticket a",
      description: 'ticket description',
      handleClick: jest.fn(), 
      provided: {
        innerRef: () => {
          return null;
        },
        draggableProps: {
          "data-rbd-draggable-context-id": "1",
          "data-rbd-draggable-id": "1",
        },
        dragHandleProps: {
          "data-rbd-drag-handle-draggable-id": "",
          "data-rbd-drag-handle-context-id": "",
          "aria-describedby": "",
          role: "",
          tabIndex: 0,
          draggable: true,
          onDragStart: () => {},
        },
      },
    };

    beforeEach(() => {
      render(
        <Ticket {...props} />
      );
    });

    it('Should display the title', () => {
      expect(screen.queryByText(props.title)).toBeInTheDocument();
    });

    it('Should display the description', () => {
      expect(screen.queryByText(props.description)).toBeInTheDocument();
    });

    it('Should trigger the on click callback', () => {
      const ticket = screen.getByText(props.title);

      fireEvent.click(ticket);

      expect(props.handleClick).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
      cleanup();
      jest.resetAllMocks();
    });
  });
});
