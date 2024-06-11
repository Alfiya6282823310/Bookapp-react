import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewallBooks = () => {
  const [data, changeData] = useState(
    [
      { "booktitle": "vvv", "category": "ttt", "publishyear": "vvv", "authorname": "nnn", "price": 123, "edition": 2 },
      { "booktitle": "vvv", "category": "ttt", "publishyear": "vvv", "authorname": "nnn", "price": 321, "edition": 3 },
      { "booktitle": "vvv", "category": "ttt", "publishyear": "vvv", "authorname": "nnn", "price": 123, "edition": 5 }
    ]
  )
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Book Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">publish year</th>
                  <th scope="col">Author name</th>
                  <th scope="col">price</th>
                  <th scope="col">Edition</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(
                    (value, index) => {
                     return <tr>
                        <td>{value.booktitle}</td>
                        <td>{value.category}</td>
                        <td>{value.publishyear}</td>
                        <td>{value.authorname}</td>
                        <td>{value.price}</td>
                        <td>{value.edition}</td>
                      </tr>
                    }
                  )
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewallBooks