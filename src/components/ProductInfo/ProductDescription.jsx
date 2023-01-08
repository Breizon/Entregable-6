import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/productDescription.css'

const ProductDescription = ({ product }) => {

  const cart = useSelector(state => state.cart)

  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if (counter - 1 > 0 ) {
        setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const dispatch = useDispatch()

  const handleCart = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    const data = {
      id: product.id,
      quantity: counter
    }
    axios.post(URL, data, getConfig())
      .then(res =>{
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err =>{
        if (err.response.status === 400) {
          const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'

          const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity ;
          
          const data = {
            id: product.id,
            newQuantity: prevQuantity + counter
          }
          axios.patch(URLPatch, data, getConfig())
            .then(res => {
              console.log(res.data)
              dispatch(getUserCart())
            })
            .catch(err => console.log(err))
        }
      })
  }

  return (
    <article className='prod'>
        <h2 className='prod_title'>{product?.title}</h2>
        <p className='prod_p'>{product?.description}</p>
        <div className='prod_general'>
        <section className='prod_cash'>
            <span className='prod_span'>Price</span>
            <h3 className='prod_price'>$ {product?.price}</h3>
        </section>
        <section className='prod_total'>
            <h3 className='prod_quantity'>Quantity</h3>
            <div className='prod_stock'>
                <div className='prod_minus' onClick={handleMinus}>-</div>
                <div className='prod-counter'>{counter}</div>
                <div className='prod_plus' onClick={handlePlus}>+</div>
            </div>
        </section>
        </div>
        <button className='prod_btn' onClick={handleCart}>Add to Cart <i className="carts fa-solid fa-cart-shopping"></i></button>
    </article>
  )
}

export default ProductDescription