import React from "react";
import { Chart as ChartJS} from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = ({data, length}) => {
    let xLabels = []
    let yTemps = []
    let yTemps2 = []
    if(data !== undefined) {
        for(const key in data["1"]) {
            xLabels.push(key);
            yTemps.push(data["1"][key]);
            yTemps2.push(data["2"][key]);
        }
        xLabels = xLabels.slice(Math.max(xLabels.length - length, 0))
        yTemps = yTemps.slice(Math.max(yTemps.length - length, 0))
        yTemps2 = yTemps2.slice(Math.max(yTemps2.length - length, 0))
        console.log(xLabels);
        console.log(yTemps);
        console.log(yTemps2)
    }

    return(
        <div className="chart">
            <Line
                datasetIdKey='id'
                data={{
                    labels: xLabels,
                    datasets: [
                    {
                        id: 1,
                        label: 'sensor 1',
                        data: yTemps,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        id: 2,
                        label: 'sensor 2',
                        data: yTemps2,
                        backgroundColor: 'rgba(99, 255, 132, 0.5)'
                    },
                    ],
                }}
                width="600"
                height="400"
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export default Chart