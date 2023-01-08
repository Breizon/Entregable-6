import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import ToOrderProducts from '../components/home/ToOrderProducts'
import './styles/home.css'

const Home = () => {

  const [productsFilter, setProductsFilter] = useState()
  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector(state => state.products)

  useEffect(() => {
    if (products) {
      setProductsFilter(products)
    }
  }, [products])

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase().trim()
    const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    setProductsFilter(filter)
    setInputValue(e.target.value)
  }

  const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to

  return (
    <div className='home'>
        <div className='search'>
          <input className='search_home' placeholder='What are you looking for?' value={inputValue} onChange={handleChange} type="text" />
          <button className='search_btn'><i class="fa-solid fa-magnifying-glass search_icon"></i></button>
        </div>
      <section className='divider'>
        <div className='filters'>
          <FilterPrice setInputPrice={setInputPrice}/>
          <FilterCategory setInputValue={setInputValue}/>
        <div className='order-price'>
          <ToOrderProducts/>
        </div>
        </div>
        <div className='products-container'>
          {
            productsFilter?.filter(filterCallBack).length !== 0 ?
            productsFilter?.filter(filterCallBack).map(product => (
              <CardProduct 
                key={product.id}
                product={product}
              />
            ))
            :
            <h1 className='alert'>Not exist products to this filter</h1>
          }
        </div>

      </section>
    </div>
  )
}

export default Home