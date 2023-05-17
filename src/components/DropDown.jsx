import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'


export const DropDownGroup = ({children, label, icon}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(label)
  const [selected, setSelected] = useState(false)

  const dropDownRef = useRef(undefined)

  useEffect(()=>{
    const handleOpen = (e) => {

      if(!dropDownRef.current.contains(e.target)){
        setOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOpen)

    return () => {
      window.removeEventListener('mousedown', handleOpen)
    }
  },[])
  
  return (
    <div 
      className={`dropdown`} 
      onClick={()=>{setOpen(!open)}}
      ref={dropDownRef}
    >
      <div className={`dropdown-label ${selected ? 'selected': ''}`}>
        <FontAwesomeIcon icon={icon} />
        {value}
        <FontAwesomeIcon
          className={open ? 'icon-rotate':'icon'} 
         icon={faChevronDown} 
        />
      </div>
      <ul 
        role='list' 
        className={open ? 'active' : 'inactive'}
        onClick={(e)=>{setValue(e.target.id), setSelected(true)}}
      >
        {children}
      </ul>
    </div>
  )
}

export const DropDownItem = ({children, value}) => {
  return (
    <li className='dropdown-item' id={value} value={value}>
      {children}
    </li>
  )
}
