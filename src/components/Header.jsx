import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  const headerRef = useRef(undefined)
  const [active, setActive] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
      window.addEventListener("scroll", isActive)

      return () => {
          window.removeEventListener("scroll", isActive)
      }
  },[])


  return (
    <header className={active ? 'header view-nav' : 'header'}>
      <h1 className='logo ff-secondary fw-regular text-light fs-xl'>Little Lemon</h1>
      <input type="checkbox" className='nav-toggle' name="nav-toggle" id="nav-toggle" />
      <nav className='nav ff-primary fs-s text-light' ref={headerRef}>
        <ul role='list'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/online-menu'>Online Order</NavLink></li>
          <li><NavLink to='/reservation'>Reservations</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className='nav-toggle-label'>
        <span></span>
      </label>
      <span className='cart-icon'>
        <AiOutlineShoppingCart size={30} />
      </span>
    </header>
  )
}

export default Header