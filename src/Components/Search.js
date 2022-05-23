import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [route,setroute]=useState("")
    const subdata=()=>{
        const  data={"route":route}
        console.log(data)
    }
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
                    <button  onClick={subdata} className="btn btn-success">SUBMIT</button>
                </div>
                
            </dv>
        </div>
    </div>
</div>


    </div>
  )
}

export default Search