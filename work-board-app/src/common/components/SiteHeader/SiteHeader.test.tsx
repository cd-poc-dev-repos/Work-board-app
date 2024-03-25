import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react/pure";
import SiteHeader from "./SiteHeader";

describe("SiteHeader", () => {
  describe("When renders", () => {
    const props = { AddNewTaskCallback: jest.fn() };

    beforeEach(() => {
      render(<SiteHeader {...props} />);
    });

    it("Should display the header", () => {
      expect(screen.queryByLabelText("site-header"));
    });

    it("Should display the project title", () => {
      expect(screen.queryByText("Project A")).toBeInTheDocument();
    });

    it("Should display the add task button", () => {
      expect(screen.queryByText("+ Add Task")).toBeInTheDocument();
    });

    it('Should trigger the new task callback', () => {
      const newTaskButton = screen.getByRole('button');

      fireEvent.click(newTaskButton);

      expect(props.AddNewTaskCallback).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
      cleanup();
      jest.resetAllMocks();
    });
  });
});
