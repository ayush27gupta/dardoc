import ReactECharts from "echarts-for-react";
import React, { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // Ensure rsuite styles are imported
import "./commonGraph.css";

const LineGraph = ({
  title = "Sales Over Time",
  subTitle = "Week-wise data",
  desc = "Since joining DarDoc",
  dateReported = "01 April 2024",
  data = [],
  handleAddLog,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const getCurrentWeekRange = () => {
    const now = new Date();
    const startOfWeek = now.getDate() - now.getDay(); // Sunday
    const endOfWeek = startOfWeek + 6; // Saturday
    const startDate = new Date(now.setDate(startOfWeek));
    const endDate = new Date(now.setDate(endOfWeek));

    return [startDate, endDate];
  };

  useEffect(() => {
    const [currentStart, currentEnd] = getCurrentWeekRange();
    setStartDate(currentStart);
    setEndDate(currentEnd);
  }, []);

  const handleDateChange = (value) => {
    if (value && value.length === 2) {
      const [start, end] = value;
      setStartDate(start);
      setEndDate(end);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  useEffect(() => {
    const filterDataByDate = (series) => {
      if (startDate && endDate) {
        return {
          ...series,
          values: series.values.filter((item) => {
            const itemDate = new Date(item.date);
            return (
              itemDate >= new Date(startDate) && itemDate <= new Date(endDate)
            );
          }),
        };
      }
      return series;
    };

    const filtered = data.map(filterDataByDate);
    setFilteredData(filtered);
  }, [startDate, endDate, data]);

  const options = {
    grid: {
      top: 80,
      right: 8,
      bottom: 50,
      left: 50,
    },
    legend: {
      data: filteredData.map((series) => series.name),
      bottom: 0,
      textStyle: {
        color: "black",
      },
    },
    xAxis: {
      type: "category",
      data: filteredData[0]?.values.map((item) => item.date) || [],
    },
    yAxis: {
      type: "value",
    },
    series: filteredData.map((series) => ({
      name: series.name,
      data: series.values.map((item) => item.value),
      type: "line",
      smooth: true,
    })),
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="line-graph-container">
      <div className="graph-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="graph-title">{title}</div>
          <div className="graph-log" onClick={() => handleAddLog()}>
            + Add New Log
          </div>
        </div>
        <div className="graph-subtitle">{subTitle}</div>
        <div className="graph-desc">{desc}</div>
        <div className="graph-desc-date">{dateReported}</div>
      </div>

      <div className="date-range-picker">
        <DateRangePicker
          size="xs"
          value={[startDate, endDate]}
          onChange={handleDateChange}
          placeholder="Select Date Range"
          format="yyyy-MM-dd"
          className="custom-date-range-picker"
          cleanable={false}
        />
      </div>

      <ReactECharts option={options} />
    </div>
  );
};

export default LineGraph;
