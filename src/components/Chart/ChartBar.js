import React from 'react';
import "./ChartBar.css"

const ChartBar = ({value, maxValue, label}) => {

    let barFillHeigth;

    if(maxValue > 0)
    {
        barFillHeigth = Math.round(value / maxValue * 100) + "%";
    }

    console.log(barFillHeigth);

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{heigth:barFillHeigth}}> </div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;