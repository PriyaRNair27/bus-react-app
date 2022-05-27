import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    const [data,setdata]=useState([{"busname":"","busregno":"","owner":"","contact":""}])
    var [route,setroute]=useState("")
    const subdata=()=>{
        const  data={"route":route}
        console.log(data)
        axios.post("http://localhost:4000/api/bussearch",data).then((response)=>{
            setdata(response.data.data)
        })
    }
    const deleteApiCall=(id)=>{
        const data={"_id":id}
       console.log(data)
       axios.post("http://localhost:4000/api/busdelete",data).then((response)=>
       {
           if(response.data.status=="success")
           {
               alert("success")
           }
           else
           {
               alert("error")
           }
       })
      
   }


  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">ROUTE</label>
                    <input onChange={(c)=>{setroute(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-success">SUBMIT</button>
                </div>
                
            </div>

            {data.map((value,key)=>{
                return<div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        BUS NAME:
                        <input type="text" value={value.busname} className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        BUS REGISTRATION NUMBER:
                        <input type="text" value={value.busregno} className="form-control"/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        OWNER NAME:
                        <input type="text" value={value.owner} className="form-control"/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        CONTACT NUMBER:
                        <input type="text" value={value.contact} className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>

                </div>
                

                    </div>
            })}


        </div>
    </div>
</div>


    </div>
  )
}

export default Search