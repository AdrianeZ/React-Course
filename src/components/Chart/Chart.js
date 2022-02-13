import React from 'react';
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({dataPoints}) => {

    const maxValue = dataPoints.reduce((prev, next) => prev + next.value, 0);

    return (
        <div className="chart">
            {
                dataPoints.map((dataPoint) => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue}
                                                        label={dataPoint.label}/>)
            }
        </div>
    );
};

export default Chart;