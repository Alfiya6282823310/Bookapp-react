import React from 'react'
import NavBar from './NavBar'

const ViewallBooks = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author Name</th>
      <th scope="col">Published Year</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>King</td>
      <td>Mark</td>
      <td>2012</td>
      <td>1500</td>
    </tr>
    <tr>
      <td>Paulo koilo</td>
      <td>Mark Suker</td>
      <td>2009</td>
      <td>12900</td>
    </tr>
    <tr>
      <td>The Boy</td>
      <td>Mathue</td>
      <td>2003</td>
      <td>190</td>
    </tr>
    <tr>
      <td>Justice</td>
      <td>Rishi </td>
      <td>2007</td>
      <td>230</td>
    </tr>
    <tr>
      <td>Kani</td>
      <td>andrew</td>
      <td>2008</td>
      <td>1200</td>
    </tr>
    <tr>
      <td>Dani</td>
      <td>sinan</td>
      <td>2006</td>
      <td>340</td>
    </tr>
    <tr>
      <td>Student</td>
      <td>Lokanad</td>
      <td>2014</td>
      <td>670</td>
    </tr>
    <tr>
      <td>Maldives</td>
      <td>Mark look</td>
      <td>2006</td>
      <td>500</td>
    </tr>
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewallBooks