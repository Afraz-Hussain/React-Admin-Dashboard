import React from 'react'
import './Sidebar.css';
import {sidebardata} from '../data.js'
function Sidebar() {
  return (
    <div className='mainsidebar'>
{
  sidebardata.map((itm)=>{
    return(
      <div className="itembox1">
<h6 className='sechead'>{itm.title}</h6>
<div className="item">

{itm.listitem.map((itms)=>
<div className='inneritm'>
  <ion-icon name={itms.icon}></ion-icon>
  <h2 className='itemtext'>{itms.itemtext}</h2>
  </div>
)}

</div>


</div>
    )
  })

}

    </div>
  )
}

export default Sidebar