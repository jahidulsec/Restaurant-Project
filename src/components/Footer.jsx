import React from 'react'
import {FaInstagram, FaFacebook, FaWhatsapp, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer-section bg-dark'>
      <div className="container">
        <div className="left">
          <h3 className='footer-nav-title ff-primary fs-l ff-bold text-light' >
            Little Lemon
          </h3>
          <p className="footer-desc text-light ff-primary fs-s fw-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className="social-icons">
            <span className="icon"><FaInstagram size={30}/></span>
            <span className="icon"><FaFacebook size={30}/></span>
            <span className="icon"><FaTwitter size={30}/></span>
            <span className="icon"><FaWhatsapp size={30}/></span>
          </div>
        </div>
        <div className="right">
          <div className="col1">
            <h3 className="footer-nav-title ff-primary fs-l ff-bold text-light">
              Navigation
            </h3>
            <ul role='list'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Order Online</a></li>
            </ul>
          </div>
          <div className="col2">
            <h3 className="footer-nav-title ff-primary fs-l ff-bold text-light">
              Services
            </h3>
            <ul role='list'>
              <li><a href="">Express Delivery</a></li>
              <li><a href="">Reservations</a></li>
              <li><a href="">Online Food</a></li>
            </ul>
          </div>
          <div className="col3">
            <h3 className="footer-nav-title ff-primary fs-l ff-bold text-light">
              Other
            </h3>
            <ul role='list'>
              <li><a href="">Contact Us!</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer