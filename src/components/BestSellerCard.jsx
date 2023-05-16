import React from 'react'

const BestSellerCard = ({name, desc, imgUrl}) => {
  return (
    <div className="seller-card">
        <img className='seller-card-img' src={`Image/${imgUrl}.jpg`} alt="item-img" />
        <h2 className="seller-card-title fw-regular ff-secondary fs-xl">
            {name}
        </h2>
        <p style={{textAlign: `center`}} className="seller-card-desc ff-primary fs-s">
            {desc} 
        </p>
    </div>
  )
}

export default BestSellerCard