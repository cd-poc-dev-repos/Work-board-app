jest.mock("../../../../api/Tickets/TicketsService");

import * as Service from "../../../../api/Tickets/TicketsService";
import * as Logic from "./Details.logic";

describe("Details.logic", () => {
  describe("createTicket", () => {
    const params = {
      ticket: {
        id: "1",
        title: "ticket a",
        description: "ticket a description",
        state: "in progress",
      },
    };
    const expectedResult = true;
    let result: boolean;

    beforeEach(async () => {
      (Service.CreateTicket as jest.Mock).mockReturnValue(true);

      result = await Logic.createTicket(params.ticket);
    });

    it("Should create the ticket", () => {
      expect(Service.CreateTicket).toHaveBeenCalledTimes(1);
      expect(Service.CreateTicket).toHaveBeenCalledWith(params.ticket);
    });

    it("Should return the expected result", () => {
      expect(result).toEqual(expectedResult);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
  });

  describe("saveTicket", () => {});
});
