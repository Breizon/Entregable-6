import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const inputFrom = +e.target.from.value
    const inputTo = +e.target.to.value
    if (inputFrom && inputTo) {
        setInputPrice({
            from: inputFrom,
            to: inputTo
        })
    } else if(!inputFrom && inputTo) {
        setInputPrice({
            from:0,
            to:inputTo
        })
    } else if (inputFrom && !inputTo) {
        setInputPrice({
            from:inputFrom,
            to:Infinity
        })
    } else {
        setInputPrice({
            from:0,
            to: Infinity
        })
    }
  }

  return (
    <section className='filter-price'>
        <h3 className='filter_title'>Price</h3>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form_item'>
                <label className='form_label' htmlFor="from">From</label>
                <input className='form_input' type="number" id='from' />
            </div>
            <div className='form_item'>
                <label className='form_label' htmlFor="to">To</label>
                <input className='form_input' type="number" id='to' />
            </div>
            <button className='form_btn'>Apply</button>
        </form>
    </section>
  )
}

export default FilterPrice