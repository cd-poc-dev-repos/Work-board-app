import React from "react";
import {Chart, ArcElement} from 'chart.js'
import { Pie } from "react-chartjs-2";
import * as Styled from "./Dashboard.style";

Chart.register(ArcElement);

const Dashboard = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Title>Dashboard</Styled.Title>
            </Styled.Header>
            <Styled.ChartTileContainer>
                <Styled.ChartTile>
                <Pie
            data={{
                labels: ['Red', 'Orange', 'Blue'],
                // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
                datasets: [
                    {
                    label: 'Popularity of colours',
                    data: [55, 23, 96],
                    // you can set indiviual colors for each bar
                    backgroundColor: [
                        'rgb(100, 78, 130)',
                        'rgb(169 133 218)',
                        'rgb(226 213 244)'
                    ],
                    borderWidth: 1,
                    }
                ]
            }}
            options={{
            plugins: {
                title: {
                display: true,
                text: "Users Gained between 2016-2020"
                }
            }
            }}
        />
                </Styled.ChartTile>
                <Styled.ChartTile>
                <Pie
            data={{
                labels: ['Red', 'Orange', 'Blue'],
                // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
                datasets: [
                    {
                    label: 'Popularity of colours',
                    data: [55, 23, 96],
                    // you can set indiviual colors for each bar
                    backgroundColor: [
                        'rgb(100, 78, 130)',
                        'rgb(169 133 218)',
                        'rgb(226 213 244)'
                    ],
                    borderWidth: 1,
                    }
                ]
            }}
            options={{
            plugins: {
                title: {
                display: true,
                text: "Users Gained between 2016-2020"
                }
            }
            }}
        />
                </Styled.ChartTile>
                <Styled.ChartTile>
                <Pie
            data={{
                labels: ['Red', 'Orange', 'Blue'],
                // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
                datasets: [
                    {
                    label: 'Popularity of colours',
                    data: [55, 23, 96],
                    // you can set indiviual colors for each bar
                    backgroundColor: [
                        'rgb(100, 78, 130)',
                        'rgb(169 133 218)',
                        'rgb(226 213 244)'
                    ],
                    borderWidth: 1,
                    }
                ]
            }}
            options={{
            plugins: {
                title: {
                display: true,
                text: "Users Gained between 2016-2020"
                }
            }
            }}
        />
                </Styled.ChartTile>
            </Styled.ChartTileContainer>
        </Styled.Container>
    )
}

export default Dashboard;