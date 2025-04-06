import React from 'react'
import './Piechart.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



const Piechart = () => {
  return (
    <div>
    <h2>Leads By Sources</h2>
   <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%" 
         
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>


      <div className="options">
        <div className="box1">
          <span className='dot1'>.</span>
         <span className="option">Mobile</span>
        </div>
        <div className="box1">
          <span className='dot2'>.</span>
         <span className="option">Laptops</span>
        </div>
        <div className="box1">
          <span className='dot3'>.</span>
         <span className="option">Printer</span>
        </div>
        <div className="box1">
          <span className='dot4'>.</span>
         <span className="option">Cameras</span>
        </div>
      </div>
    </div>
   )
}

export default Piechart