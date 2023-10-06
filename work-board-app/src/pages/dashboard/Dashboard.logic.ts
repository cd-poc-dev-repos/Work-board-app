import { uniq } from 'lodash';
import * as Service from "../../api/Tickets/TicketsService";
import * as Type from './Dashboard.type';

const TicketsByStatus = async () => {
    const chartData: Type.ITicketByStatusEntry[] = [];
    const data = await Service.GetTickets();
    const status = uniq(data?.tickets.map((ticket) => ticket.state));

    status.forEach(status => {
        chartData.push({
            status: status,
            count: data?.tickets.filter(x => x.state = status).length ?? 0
        })
    });

    return chartData;
};

const ProjectEstimateEndDate = () => {
    return '10/11/2023';
}

export { TicketsByStatus, ProjectEstimateEndDate }