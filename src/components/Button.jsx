import React from 'react'

const Button = ({children, onClick, id, type}) => {

  return (
    <button 
      type={type}
      className='btn-yellow'
      onClick={onClick}
      id={id}
    >
        {children}
    </button>
  )
}

export default Button