import { screen, render, cleanup } from "@testing-library/react";
import Ticket from "./Ticket";

describe("Ticket", () => {
  describe("When renders", () => {
    const props = {
      title: "ticket a",
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

    beforeAll(() => {
      render(<Ticket {...props} />);
    });

    it('Should display the title', () => {
        expect(screen.queryByText(props.title)).toBeInTheDocument();
    });

    afterAll(() => {
      cleanup();
      jest.resetAllMocks();
    });
  });
});
