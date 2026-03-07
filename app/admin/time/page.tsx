import React from 'react'
import Admincnrol from "../Admincntrol";
import Navbar from "../navbar"
import Time from './time';
export default function Piernt() {
  return (
     <div dir='rtl' className="flex">
       <Admincnrol />
       <div className="flex flex-col w-full bg-#d3d3d3" style={{background:"#d3d3d3"}}>
       <Navbar />
<Time />
       </div>
   
       </div>
  )
}
