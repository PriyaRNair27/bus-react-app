import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Addbus = () => {
    var [route,setroute]=useState("")
    var [busname,setbusname]=useState("")
    var [busreg,setbusreg]=useState("")
    var [owner,setowner]=useState("")
    var [contact,setcontact]=useState("")
    const subdata=()=>{
        const data={"route":route,"busname":busname,"busreg":busreg,"owner":owner,"contact":contact}
        console.log(data)
    axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data).then(
        (response)=>
        {
            console.log(response.data)
            if(response.data.status=="success")
            {
                alert("successfully inserted")
            }
            else
            {
                alert("failed ")
            }
        }
        )}

  return (
    <div>
<Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <dv className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">ROUTE</label>
                    <input onChange={(c)=>{setroute(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">BUS NAME</label>
                    <input onChange={(c)=>{setbusname(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">BUS REG NUM</label>
                    <input onChange={(c)=>{setbusreg(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">OWNER NAME</label>
                    <input onChange={(c)=>{setowner(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">CONTACT NUM</label>
                    <input onChange={(c)=>{setcontact(c.target.value)}} type="text" className="form-control"/>
                    

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SUBMIT</button>
                </div>
                
            </dv>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbus