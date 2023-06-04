import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from './Logo/Logo'


function Header() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
       <Logo/>
        <nav id="navbar" class="navbar order-last order-lg-0">
            <Navbar/>
          < i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="./pages/appointment.html" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span>
          Appointment</a>
          <a href="#" class="appointment-btn scrollto">
            <span class="d-none d-md-inline">Login/ Signup</span>
          </a>

      </div>
    </header>
  )
}

export default Header