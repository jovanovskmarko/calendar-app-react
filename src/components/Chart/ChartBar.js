import React from "react";
import "./ChartBar.css";

const ChartBar = function (props) {
  let barFillHeight = "0%";
  console.log(props.value, props.maxValue);
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-barf__fill'
          style={{ height: barFillHeight, backgroundColor: "green" }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
