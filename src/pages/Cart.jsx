import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'

const Cart = () => {

  const dispatch = useDispatch()  

  const cartProducts = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getUserCart())
  }, [])
  

  const handleCheckout = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    const data = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"  
    }
    axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getUserCart())
        })
        .catch(err => console.log(err))
  }

  return (
    <section className='cart'>
        <h2 className='cart_title'>Cart</h2>
        <div className='cart_product'>
            {
                cartProducts?.map(product => (
                    <CartProduct 
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
        <footer className='cart_footer'>
            <div className='total_price'>
            <span className='cart_footer_title'>Total</span>
            <p className='cart_total'><span className='simb'>$</span>
                {
                    cartProducts ?
                        cartProducts.reduce((acc,cv) => {
                            return cv.price * cv.productsInCart.quantity + acc
                        }, 0)
                    :
                        0
                }
            </p>
            </div>
            <button className='cart_btn' onClick={handleCheckout}>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart