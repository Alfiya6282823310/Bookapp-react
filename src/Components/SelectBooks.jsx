import React, { useState } from 'react'
import NavBar from './NavBar'

const SelectBooks = () => {
    const [data,setData]=useState(
        {
            "booktitle":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.valuue})
    }
    const readValue=()=>
        {
            console.log(data)
        }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='booktitle' value={data.booktitle} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-warning" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectBooks