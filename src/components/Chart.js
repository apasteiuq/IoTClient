import React from "react";
import { Chart as ChartJS} from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = ({data, length}) => {
    let xLabels = []
    let yTemps = []
    if(data !== undefined) {
        for(const key in data) {
            xLabels.push(key);
            yTemps.push(data[key]);
        }
        xLabels = xLabels.slice(Math.max(xLabels.length - length, 0))
        yTemps = yTemps.slice(Math.max(yTemps.length - length, 0))
        console.log(xLabels);
        console.log(yTemps);
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
                        label: '',
                        data: yTemps,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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