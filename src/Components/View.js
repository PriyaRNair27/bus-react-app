import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
  var  [viewlist,setviewlist]=useState([])

  var [loadstatus,setloadstatus] =useState([])   
  axios.get("http://localhost:4000/api/bus").then(
      (response)=>{
  
          console.log(response.data)
          setviewlist(response.data.data) 
          setloadstatus(false)
      })
  return (
    <div>
        <Header/>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">ROUTE</th>
      <th scope="col">BUS NAME</th>
      <th scope="col">BUS REG NUM</th>
      <th scope="col">OWNER NAME</th>
      <th  scope="col">CONTACT NUM</th>
    </tr>
  </thead>
  <tbody>
    
        {viewlist.map((value,key)=>{
           return <tr>
                 <td>{value.route}</td>
               <td>{value.busname}</td>
      <td>{value.busregno}</td>
      <td>{value.owner}</td>
      <td>{value.contact}</td>
      </tr>
        })}
     
     
   
   
    
  </tbody>
</table>



</div>
</div>
</div></div></div>
    </div>
  )
}

export default View