import React from 'react'
import './Datachart.css'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
function Datachart() {
    const data = [
        {
          name: 'Mon',
          mobile: 590,
          laptop: 800,
          
        },
        {
         name: 'Tues',
          mobile: 490,
          laptop: 200,
        },
        {
          name: 'Wed',
          mobile: 490,
          laptop: 500,
        },
        {
          name: 'Thrus',
          mobile: 600,
          laptop: 500,
        },
        {
          name: 'Fri',
          mobile: 600,
          laptop: 500,
        },
        
      ];
  return (
    <div>
    <h2>Total Profit</h2>
    <ResponsiveContainer width={300} height={300}>
  <ComposedChart
    data={data}
    margin={{
      top: 30,
      right: 30,
      left: 0,
    }}
  >
    <CartesianGrid stroke="#f5f5f5" />
    <XAxis dataKey="name" scale="band" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="mobile" barSize={20} fill="#413ea0" />
    <Bar dataKey="laptop" barSize={20} fill="#82ca9d" />
    <Line type="monotone" dataKey="mobile" stroke="#ff7300" />
  </ComposedChart>
</ResponsiveContainer>

    </div>
  )
}

export default Datachart