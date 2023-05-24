import React from 'react'
import MenuCard from '../components/MenuCard'

const Menu = () => {
  return (
    <section className='menu-section'>
      <div className='header'>
        <h1 className="text-yellow ff-secondary fs-3xl fw-regular">
          Our Choice
        </h1>
        <h2 className='text-light fw-regular ff-primary fs-l'>
          Online Menu
        </h2>
      </div>
      <div className="menu-item-section">
        <div className="header">
          <h3 className="text-dark fw-bold fs-l ff-primary">
            Order for Delivery!
          </h3>
          <div className="query-list">
            <button className="query-btn">
              Lunch
            </button>
            <button className="query-btn">
              Lunch
            </button>
            <button className="query-btn">
              Lunch
            </button>
          </div>
        </div>
        <div className="menu-cards">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </section>
  )
}

export default Menu