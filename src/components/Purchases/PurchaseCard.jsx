import React from 'react'
import './style/purchaseCard.css'

const PurchaseCard = ({purchase}) => {

  console.log(purchase)

  const datePurchase = new Date(purchase.createdAt)

  return (
    <article className='purchase'>
        <h3 className='purchase_date'>{datePurchase.toLocaleDateString()}</h3>
        <div className='purchase_card'>
            <ul className='purchase_list'>
                {
                    purchase.cart.products.map(prod => (
                        <li className='purchase_item' key={prod.id}>
                            <h4 className='purchase_title'>{prod.title}</h4>
                            <span className='purchase_quantity'>{prod.productsInCart.quantity}</span>
                            <span className='purchase_price'>{prod.price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </article>
  )
}

export default PurchaseCard