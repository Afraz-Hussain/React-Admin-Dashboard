import React from 'react'
import './Home.css'
import Userlist from '../Userlist'
import Midchart from '../Midchart'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../data'
import Barchart from '../Barchart'
import Piechart from '../Piechart'
import Areachart from '../Areachart'
import Datachart from '../Datachart'
function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <Userlist />
      </div>
      <div className='box box2'>
        <Midchart {...chartBoxUser}/>
      </div>
      <div className='box box3'> 

      <Midchart {...chartBoxProduct}/>
      </div>
      <div className='box box4'>
      <Piechart/> 
      </div>
      <div className='box box5'>

       <Midchart {...chartBoxRevenue}/>
       </div>
      <div className='box box6'> 

      <Midchart {...chartBoxConversion}/>
      </div>
     
      <div className='box box8'> <Datachart/></div>
      <div className='box box7'>
      <Areachart/>
      </div>
      <div className='box box9'> <Barchart/></div>
      
    </div>
  )
}

export default Home