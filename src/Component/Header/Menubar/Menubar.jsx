import React from 'react'

function Menubar() {
  let menudata = ["Departments","Doctors","About"]
  return (
    <ul>
      <li>
          <a className="nav-link scrollto active" href="index.html">Home</a>
      </li>
      {
        menudata.map((val)=>(
          <li>
            <a className="nav-link scrollto " href="index.html">{val}</a>
          </li>
        ))
      }
      {/* <li>
        <a className="nav-link scrollto active" href="index.html">Home</a>
      </li>
      <li>
        <a className="nav-link scrollto" href="./pages/departments.html">Departments</a>
      </li>
      <li>
        <a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a>
      </li>
      <li>
        <a className="nav-link scrollto " href="./pages/about.html">About</a>
      </li>
      <li>
        <a className="nav-link scrollto" href="./pages/contact.html">Contact</a>
      </li> */}
    </ul>
  )
}

export default Menubar