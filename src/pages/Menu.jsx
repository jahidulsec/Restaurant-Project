import React, { useEffect, useState } from 'react'
import MenuCard from '../components/MenuCard'
import { category, menuItems } from '../data'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import { faL, fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../utilities/newRequest'

const Menu = ({onAdd}) => {

  const [limit, setLimit] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNumber, setPageNumber] = useState([])
  const [firstIndex, setFirstIndex] = useState()
  const [lastIndex, setLastIndex] = useState()
  const [catSelected, setCatSelected] = useState('')


  const { isLoading, error, data } = useQuery({
    queryKey: ['Menu'],
    queryFn: async() =>
      axios.get('http://127.0.0.1:8000/api/menu-items/').then(
        (res) => {return res.data.results}
      ),
  })

  console.log(data)

  // const { isCatLoading, errorCat, dataCat } = useQuery({
  //   queryKey: ['category'],
  //   queryFn: () =>
  //     fetch('http://127.0.0.1:8000/api/category/').then(
  //       (res) => res.json(),
  //     ).then(
  //       (data) => {return data.results}
  //     ),
  // })

  console.log(data)
  
  let menuItemData = []
  if (isLoading) {
    menuItemData = menuItems.filter((item) => {
      if(catSelected !== '') {
        return item.category === catSelected
      }
      return item
    })
  }



  const handlePageNumber = () => {
    let numberOfPage = menuItemData.length / limit
    numberOfPage = Math.ceil(numberOfPage)
    let num = Array.from({length: numberOfPage}, (_, i) => i + 1)
    setPageNumber(num)
  }

  


  useEffect(() => {
    
    let last = currentPage * limit
    let first = last - limit
    // console.log('first',first, last, 'page '+ pageNumber[1])
    setFirstIndex(first)
    setLastIndex(last)

    if (catSelected) {
      setCurrentPage(1)
    }
    handlePageNumber()

  }, [currentPage,catSelected])



  const handleNext = () => {
    if  (currentPage > pageNumber.length-1) {
      return 
    }
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrev = () => {
    if  (currentPage < 2) {
      return 
    }
    setCurrentPage((prev) => prev - 1)
  }

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
            {
              category.map(cat => (
                <button 
                  className={`btn-pagination ${catSelected === cat.name ? 'page-selected' : ''}`}
                  key={cat.id}
                  value={cat.name}
                  onClick={(e) => {
                    catSelected !== cat.name ? 
                      setCatSelected(e.target.value) 
                      :
                      setCatSelected("")}}
                >
                  {cat.name}
                </button>
              ))
            }
          </div>
        </div>
        <div className="menu-cards">
          {
            isLoading ? 'loading' : error ? 'error' : 
            data.slice(firstIndex, lastIndex).map( item => (
              <MenuCard 
                key={item.id}
                name={item.title}
                price={item.price}
                desc={item.desc}
                imgUrl={item.img_url}
                onAdd={onAdd}
              />
            ))
          }
        </div>
        <div 
          className={`pagination ${pageNumber.length < 2 ? 'pagination-hidden' : '' }`}
        >
          <button 
            className='btn-pagination'
            onClick={handlePrev}  
          >
            <AiOutlineLeft />
            Prev
          </button>
          {
            pageNumber.map(num => (
              <button 
                key={num}
                value={num}
                className={`btn-pagination ${currentPage == num ? 'page-selected' : ""}`}
                onClick={(e) => {setCurrentPage(Number(e.target.value))}}
              >
                {num}
              </button>
            ))
          }
          <button 
            className='btn-pagination'
            onClick={handleNext}
          >
            Next
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu