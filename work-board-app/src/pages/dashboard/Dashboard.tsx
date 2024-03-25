import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import * as Logic from "./Dashboard.logic";
import * as Type from "./Dashboard.type";
import * as Styled from "./Dashboard.style";

Chart.register(ArcElement, Tooltip, Legend, Title);

const Dashboard = () => {
  const [ticketsByStatus, setTicketsByStatus] = React.useState<
    Type.ITicketByStatusEntry[] | null
  >(null);

  React.useEffect(() => {
    const init = async () => {
      const response = await Logic.TicketsByStatus();

      setTicketsByStatus(response);
    };

    init();
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Dashboard</Styled.Title>
      </Styled.Header>
      <Styled.ChartTileContainer>
        <Styled.ChartTile>
          {!!ticketsByStatus ? (
            <Pie
              data={{
                labels: ticketsByStatus?.map((x) => x.status),
                datasets: [
                  {
                    label: "Tickets",
                    data: ticketsByStatus?.map((x) => x.count),
                    backgroundColor: [
                      "rgb(100, 78, 130)",
                      "rgb(169 133 218)",
                      "rgb(226 213 244)",
                      "rgb(226 213 210)",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Tickets By State",
                  },
                },
              }}
            />
          ) : (
            <p>no data</p>
          )}
        </Styled.ChartTile>
      </Styled.ChartTileContainer>
    </Styled.Container>
  );
};

export default Dashboard;
