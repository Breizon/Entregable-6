import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({product}) => {

  const dispatch =useDispatch()

  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='card-product'>
        <header className='produc_header'>
          <div>
            <h4 className='product_brand'>{product.brand}</h4>
            <h3 className='product_title'>{product.title}</h3>
          </div>
          <button className='product_trash' onClick={handleDelete}>
            <i class="trash fa-regular fa-trash-can"></i>
          </button>
        </header>
        <div className='product_quantity'>{product.productsInCart.quantity}</div>
        <div className='product_check' >
            <p className='product_p'>Unit Price</p>
            <span className='product_price'>$ {product.price}</span>
        </div>
    </article>
  )
}

export default CartProduct