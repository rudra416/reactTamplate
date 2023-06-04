import React from 'react'
import { Facebook, Instagram, Linkedin, Skype, Twitter } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer id="footer">
        <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
                <div>
                    <h4>Address</h4>
                    <p>
                        F-505, <br/>
                        Inovative Plazza<br/>
                        New Delhi, India<br/><br/>
                        <strong>Phone:</strong> +91 9988776655<br/>
                        <strong>Email:</strong> cityhospital@example.com<br/>
                    </p>
                </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" className="twitter">
                    <span className='footer-icon'>
                        <Twitter/>
                    </span>
                </a>
                <a href="#" className="facebook">
                    <span className='footer-icon'>
                        <Facebook/>
                    </span>
                </a>
                <a href="#" className="instagram">
                    <span className='footer-icon'>
                        <Instagram/>
                    </span>
                </a>
                <a href="#" className="google-plus">
                    <span className='footer-icon'>
                        <Skype/>
                    </span>
                </a>
                <a href="#" className="linkedin">
                    <span className='footer-icon'>
                    <Linkedin/>
                    </span>
                </a>
            </div>
        </div>
  </footer>
  )
}

export default Footer