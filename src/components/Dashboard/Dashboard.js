import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  const data = [
    {
      name: "Mar",
      uv: 100000,
      pv: 241,
      amt: 10401
    },
    {
      name: "Apr",
      uv: 200000,
      pv: 423,
      amt: 24500
    },
    {
      name: "May",
      uv: 500000,
      pv: 726,
      amt: 67010
    },
    {
      name: "June",
      uv: 500000,
      pv: 529,
      amt: 40405
    },
    {
      name: "July",
      uv: 600000,
      pv: 601,
      amt: 50900
    },
    {
      name: "Aug",
      uv: 700000,
      pv: 670,
      amt: 61000
    },
  
  ];

const Dashboard = () => {
    return (
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
   
    );
};

export default Dashboard;