import React from 'react'
import Header from './Header'

const View = () => {
    var viewlist=[
        {
            "route":"tvm-pta",
            "busname":"maadhu",
            "busreg":"9090",
            "owner":"Rajesh",
            "contact":"9078563423"

        },
        {
            "route":"tvm-alpzha",
            "busname":"lalgy",
            "busreg":"7867",
            "owner":"Madhavan",
            "contact":"8908563423"

        },
        {
            "route":"pta-ekm",
            "busname":"ranibow",
            "busreg":"6578",
            "owner":"martin",
            "contact":"8097663423"

        },
        {
            "route":"tvla-ktym",
            "busname":"sooraj",
            "busreg":"9067",
            "owner":"sreekumar",
            "contact":"8067564598"

        },
        {
            "route":"pta-plkd",
            "busname":"sreehari",
            "busreg":"6090",
            "owner":"Rajesh",
            "contact":"9078563423"

        },
        {
            "route":"tvm-pta",
            "busname":"raju",
            "busreg":"4547",
            "owner":"mahesh",
            "contact":"9078563423"

        },
        {
            "route":"tvm-ktym",
            "busname":"parthan",
            "busreg":"8079",
            "owner":"rajeev",
            "contact":"9089786756"

        }
    ]
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
      <td>{value.busreg}</td>
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