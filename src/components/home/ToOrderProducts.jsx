import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice'
import './styles/toOrderProducts.css'

const ToOrderProducts = () => {

  const dispatch = useDispatch()  

  const handleAscending = () => {
    dispatch(ascendingOrderProducts())
  }

  const handleDescending = () => {
    dispatch(descendingOrderProducts())
  }

  return (
    <div className='order'>
      <h2 className='order_title'>Order Price</h2>
      <div className='order_btn'>
          <button className='ascending' onClick={handleAscending}>Ascending Order</button>
          <button className='descending' onClick={handleDescending}>Descending Order</button>
      </div>
    </div>
  )
}

export default ToOrderProducts