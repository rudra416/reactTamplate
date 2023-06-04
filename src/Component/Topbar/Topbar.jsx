import React from 'react'
import { Envelope, Phone } from 'react-bootstrap-icons';
import {BsTwitter,BsFacebook, BsInstagram, BsLinkedin, BsMailbox} from 'react-icons/bs'
function Topbar() {
  return (
    <div id="topbar" class="d-flex align-items-center fixed-top">
      <div class="container d-flex justify-content-between">
        <div class="contact-info d-flex align-items-center">
          <Envelope/><a href="mailto:contact@example.com">cityhospital@example.com</a>
          <Phone/> +91 9988776655
        </div>
        <div class="d-none d-lg-flex social-links align-items-center">
          <a href="#" class="twitter"><BsTwitter/></a>
          <a href="#" class="facebook"><BsFacebook/></a>
          <a href="#" class="instagram"><BsInstagram/></a>
          <a href="#" class="linkedin"><BsLinkedin/></a>
        </div>
      </div>
    </div>
  )
}

export default Topbar