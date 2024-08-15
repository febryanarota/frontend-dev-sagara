"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

export const data = [
  [" ", " "],
  ["Back End", 289],
  ["Front End", 194],
  ["Quality Assurance", 311],
  ["UI/UX", 137],
];

export const options = {
  chart: {},
  colors: ["#A51535"],
};

export default function BarChartComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center font-bold text-red-accent mt-20">Loading...</div>
    );
  }

  return (
    <div className="bg-white-base flex flex-col p-5 shadow-custom rounded-md justify-between items-start my-10">
      <p className=" font-bold text-2xl mb-7">Students</p>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
