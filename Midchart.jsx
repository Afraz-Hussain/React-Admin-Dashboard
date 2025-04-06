import React from 'react'
import "ionicons/icons";
import './Midchar.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartBoxUser } from './data';  
function Midchart(props) {
  return (
    <div className="chart">
    <div className="leftbox">
        <div className="leftinnerbox">
        {/* <ion-icon name={props.icon} className="icon" ></ion-icon> */}
        <span className='innerheading'>{props.title}</span>        
        </div>
        {/* <h4 className='innerheading'>{props.number}</h4> */}
        {/* <h5 className='innerheading'>View More</h5> */}
    </div>
    <div className="rightbox">
    <ResponsiveContainer width="100%" height={200}>
          <LineChart data={props.chartData}>
            {/* <CartesianGrid  />  This is used to show full graph  */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
           contentStyle={{ background: "transparent", border: "none" }} 
                position={{x:10,y:70}}
            />
            <Legend />
            <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>      
    </div>
    </div>
  )
}

export default Midchart