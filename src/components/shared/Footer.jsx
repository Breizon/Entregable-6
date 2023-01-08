import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='footer_title'>© Copyright</h1>
      <div className='footer_list'>
        <button className='footer_btn'><i className="fa-brands fa-facebook"></i></button>
        <button className='footer_btn'><i className="fa-brands fa-instagram"></i></button>
        <button className='footer_btn'><i className="fa-brands fa-whatsapp"></i></button>
        <button className='footer_btn'><i className="fa-brands fa-twitter"></i></button>
      </div>
    </footer>
  )
}

export default Footer