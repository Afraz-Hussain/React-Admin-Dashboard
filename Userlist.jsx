import React from 'react'
import './Userlist.css';
import { userlist } from './data';

function Userlist() {
  return (
    <div>
   
   <h2 className="heading01">Best Deals</h2> 
   {
        userlist.map((itm)=>(
            <div className='mainbox'>
  <img src={itm.img}></img>
 
  <div className='userdetails'>
  <h3 >{itm.name} </h3>
  <span>{itm.email}</span>
  
  </div>
  <h4>{itm.price}</h4>

  </div>
        ))
    }
    </div>
  )
}

export default Userlist