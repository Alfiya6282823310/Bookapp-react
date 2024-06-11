import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBooks = () => {
    const [data,changeData]=useState(
        {
            "booktitle":"",
            "category":"",
            "publishyear":"",
            "authorname":"",
            "price":"",
            "edition":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        
    }
  return (
    <div>
        <NavBar/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Book Title</label>
                        <input type="text" className="form-control" name='booktitle' value={data.booktitle} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Category</label>
                        <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                            <option className="option">fiction</option>
                            <option className="option">Novel</option>
                            <option className="option">toy story</option>
                            <option className="option">short story</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Published Year</label>
                        <input type="text" className="form-control" name='publishyear' value={data.publishyear} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Author Name</label>
                        <input type="text" className="form-control" name='authorname' value={data.authorname} onChange={inputHandler} />
                    </div>
                   
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Edition</label>
                        <input type="text" className="form-control" name='edition' value={data.edition} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
       </div> 
        </div>
  )
}

export default AddBooks