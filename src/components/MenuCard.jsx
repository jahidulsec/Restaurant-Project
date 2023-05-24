import React from 'react'

const MenuCard = () => {
  return (
    <div className='menu-card'>
        <img className='menu-img' src="Image/fried-pork.jpg" alt="menuImage" />
        <div className="card-header">
            <h4 className='ff-secondary fs-xl fw-regular'>
                Fried Pork
            </h4>
            <span className="price text-yellow ff-primary fw-bold fs-l">$12.00</span>
        </div>
        <p className="card-desc ff-primary fs-s fw-regular">
            The famous greek salad of crispy lettuce, 
            peppers, olives and our Chicago style feta cheese, 
            garnished with crunchy garlic and rosemary croutons. 
        </p>
        <button className='btn-yellow'>Add to cart</button>
    </div>
  )
}

export default MenuCard